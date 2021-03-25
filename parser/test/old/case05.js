const acorn      = require ('acorn');
const stage3     = require ('acorn-stage3');
const decorators = require ('../parser/index.js');


const result = acorn.Parser.extend (stage3, decorators).parse (`
class A {
  @deco_static_property_prop prop
  static P = 10
  
  @deco_property_prop prop
  p = 10
}
`, {ecmaVersion : 2020});

console.log (JSON.stringify (result, null, 2));