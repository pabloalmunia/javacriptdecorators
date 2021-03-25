const acorn      = require ('acorn');
const stage3     = require ('acorn-stage3');
const decorators = require ('../parser/index.js');


const result = acorn.Parser.extend (stage3, decorators).parse (`
@init:deco_init_class
@deco_class
class A {
  @init:deco_init_method
  @deco_method
  m() {
    console.log('m');
  }
}
`, {ecmaVersion : 2020});

console.log (JSON.stringify (result, null, 2));