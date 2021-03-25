const acorn      = require ('acorn');
const decorators = require ('../parser/index.js');


const result = acorn.Parser.extend (decorators).parse (`
@deco_class
@deco_class_function('t')
class A {
  @deco_static_method
  static M() {
    console.log('M');
  }
  @deco_method
  m() {
    console.log('m');
  }
}
`, {ecmaVersion : 2020});

console.log (JSON.stringify (result, null, 2));