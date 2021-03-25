const parser = require ('../index.js');

const result = parser (`
@deco_class
@deco_class_function('t')
class A {
  @deco_static_property
  static S = 10
  @deco_static_method
  static M() {
    console.log('M');
  }

  @deco_static_private_property
  static #P = 20
  @deco_static_private_method
  static #N () {}

  @deco_property
  s = 10
  @deco_method
  m() {
    console.log('m');
  }

  @deco_private_property
  #p = 20
  @deco_private_method
  #n () {}
  
}
`);

console.log (JSON.stringify (result, null, 2));