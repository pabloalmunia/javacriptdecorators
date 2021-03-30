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
        if (this.value === 'accessor') {
          const branch = this._branch ();
          branch.next ();
          if (branch.type.label === 'name') {
            node.kind = 'auto-accessor';
            this.next ();
          }
        } else {
          node.kind = isInit ? 'init-' : '';
        }
        decorators.push (this.finishNode (node, 'Decorator'));
      }
    }
    
    assignDecorators (decorators, fn, noIn, refDestructuringErrors) {
      const node        = fn.call (this, noIn, refDestructuringErrors);
      node.decorators   = decorators.map (d => {
        d.kind +=
          d.kind === 'auto-accessor' ? '' :
            node.type === 'FieldDefinition' ? 'field' :
              node.type === 'ClassDeclaration' ? 'class' :
                node.kind === 'get' ? 'getter' :
                  node.kind === 'set' ? 'setter' :
                    node.kind;
        return d;
      });
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
  return ast;
}
