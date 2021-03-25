const acorn      = require ('acorn');
const stage3     = require ('acorn-stage3');
const decorators = require ('../parser/index.js');


const result = acorn.Parser.extend (stage3, decorators).parse (`
@deco_class
@deco_class_function('t')
class A {
  @deco_static_property
  static #S = 10
  @deco_static_method
  static #M() {
    console.log('M');
  }
  @deco_property
  #s = 10
  @deco_method
  #m() {
    console.log('m');
  }
}
`, {ecmaVersion : 2020});

console.log (JSON.stringify (result, null, 2));