function checker (kind, newValue) {
  return function (value, context) {
    console.assert (kind === context.kind);
    if (kind === 'auto-accessor') {
      return {
        get () { return value.get.call (this) * 3; },
        set (v) { value.set.call (this, v * 3); },
        initialize (v) { return 3; }
      };
    }
    return newValue;
  };
}

const P = Symbol ();
const M = Symbol ();
const G = Symbol ();
const A = Symbol ();

class MyClass {
  @checker('field', () => 2)
  [P] = 1;
  @checker('method', function() {return 'abc';})
  [M]() {}
  @checker('getter', function() {return this[P] * 2})
  get [G]() {
    return this[P];
  }
  @checker('setter', function() {this[P] = v * 2})
  set [G](v) {
    this[P] = v;
  }
  @checker('auto-accessor')
  accessor [A] = 2;
}

const myObject = new MyClass ();
console.assert (typeof myObject[ P ] === 'number');
console.assert (typeof myObject[ A ] === 'number');
console.assert (typeof myObject[ G ] === 'number');
console.assert (typeof myObject[ M ] === 'function');

console.assert (myObject[ P ] === 2);
console.assert (myObject[ A ] === 9);
myObject[ A ] = 2;
console.assert (myObject[ A ] === 18);
console.assert (myObject[ G ] === 4);
console.assert (myObject[ M ] () === 'abc');

