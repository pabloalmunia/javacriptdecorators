const acorn  = require ('acorn');
const stage3 = require ('acorn-stage3');
const walker = require ('../lib/walker.js');

function DecoratorParser (ParentParser) {
  
  class Parser extends ParentParser {
    memberDecorators = [];
    classDecorators  = [];
    
    // @ token
    getTokenFromCode (code) {
      if (code === 64) {
        ++this.pos;
        if (this.input.substr (this.pos, 5) === 'init:') {
          this.pos += 5;
          return this.finishToken (this.decoratorInitIdentifierToken);
        }
        return this.finishToken (this.decoratorIdentifierToken);
      }
      return super.getTokenFromCode (code);
    }
    
    // Parse element decorator
    parseClassElement (noIn, refDestructuringErrors) {
      this.parseDecorators (this.memberDecorators);
      if (this.memberDecorators.length) {
        return this.assignDecorators (
          this.memberDecorators,
          super.parseClassElement,
          noIn,
          refDestructuringErrors
        );
      }
      if (this.value === 'static') {
        const branch = this._branch ();
        branch.next ();
        if (branch.value === 'accessor') {
          this.next ();
          this.next ();
          const node    = super.parseClassElement.call (this, noIn, refDestructuringErrors);
          node.static   = true;
          node.accessor = true;
          return node;
        }
      } else if (this.value === 'accessor') {
        this.next ();
        if (this.value === 'static') {
          throw new Error ('"static" keyword must included before "accessor" keyword');
        }
        const node    = super.parseClassElement.call (this, noIn, refDestructuringErrors);
        node.accessor = true;
        return node;
      }
      return super.parseClassElement.call (this, noIn, refDestructuringErrors);
    }
    
    // Parse class decorator
    parseStatement (noIn, refDestructuringErrors) {
      this.parseDecorators (this.classDecorators);
      if (this.type === acorn.tokTypes._class && this.classDecorators.length) {
        return this.assignDecorators (
          this.classDecorators,
          super.parseStatement,
          noIn,
          refDestructuringErrors
        );
      }
      return super.parseStatement.call (this, noIn, refDestructuringErrors);
    }
    
    parseDecorators (decorators) {
      while (this.type === this.decoratorIdentifierToken || this.type === this.decoratorInitIdentifierToken) {
        const isInit = this.type === this.decoratorInitIdentifierToken;
        const node   = this.startNode ();
        this.next ();
        node.expression = this.parseMaybeAssign ();
        if (this.value === 'static') {
          const branch = this._branch ();
          branch.next ();
          if (branch.value === 'accessor') {
            branch.next ();
            if (branch.type.label === 'name') {
              node.kind = 'auto-accessor';
              this.next ();
              this.next ();
              node.static = true;
            }
          } else {
            node.kind = isInit ? 'init-' : '';
          }
        } else if (this.value === 'accessor') {
          const branch = this._branch ();
          branch.next ();
          if (branch.type.label === 'name') {
            node.kind = 'auto-accessor';
            this.next ();
          } else if (branch.type.label === 'privateName') {
            throw new TypeError('Sorry, accessor is not supported with private members in this tool')
          }
        } else {
          node.kind = isInit ? 'init-' : '';
        }
        decorators.push (this.finishNode (node, 'Decorator'));
      }
    }
    
    assignDecorators (decorators, fn, noIn, refDestructuringErrors) {
      const node      = fn.call (this, noIn, refDestructuringErrors);
      if (decorators.find(x => x.kind === 'auto-accessor')) {
        node.accessor = true
      }
      node.decorators = decorators.map (d => {
        d.kind +=
          d.kind === 'auto-accessor' ? '' :
            node.accessor ? 'auto-accessor' :
              node.type === 'FieldDefinition' ? 'field' :
                node.type === 'ClassDeclaration' ? 'class' :
                  node.kind === 'get' ? 'getter' :
                    node.kind === 'set' ? 'setter' :
                      node.kind;
        return d;
      });
      if (node.decorators.find (d => d.kind === 'auto-accessor')) {
        node.accessor = true;
      }
      decorators.length = 0;
      return node;
    }
    
  }
  
  Parser.prototype.decoratorIdentifierToken     = new acorn.TokenType ('decoratorIdentifier');
  Parser.prototype.decoratorInitIdentifierToken = new acorn.TokenType ('decoratorInitIdentifier');
  return Parser;
}

module.exports = (code) => {
  const ast = acorn
    .Parser
    .extend (stage3, DecoratorParser)
    .parse (
      code,
      {
        ecmaVersion : 2020
      }
    );
  return normalize (ast);
};

function normalize (ast) {
  walker (
    ast,
    (o) => o.type === 'FieldDefinition',
    (o) => o.type = 'ClassProperty'
  );
  walker (
    ast,
    (o) => o.type === 'PrivateName',
    (o) => o.id = {
      'type'  : 'Identifier',
      'start' : o.start + 1,
      'end'   : o.end,
      'name'  : o.name
    }
  );
  walker (
    ast,
    (o) => o.type === 'ClassProperty' && o.decorators && o.decorators.find (x => x.static),
    (o) => o.static = true
  );
  return ast;
}
