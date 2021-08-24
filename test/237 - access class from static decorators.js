const result = [];
function getClass (klass) {
  result.push(klass.name);
  return function(value, context) {}
}

try {

  @getClass (A)
  class A {
    @getClass (A)
    accessor static a = 1;

    @getClass (A)
    static b() {}

    @getClass (A)
    static c = 1;

    @getClass (A)
    accessor static #a = 1;

    @getClass (A)
    static #b() {}

    @getClass (A)
    static #c = 1;


  }
  console.assert(result.length === 7);
  console.assert(result[0] === 'A');
  console.assert(result[1] === 'A');
  console.assert(result[2] === 'A');
  console.assert(result[3] === 'A');
  console.assert(result[4] === 'A');
  console.assert(result[5] === 'A');
  console.assert(result[6] === 'A');

} catch(e) {
  console.assert(false);
}
