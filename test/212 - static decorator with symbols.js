function checker (kind, newValue) {
  return function (value, context) {
    console.assert (context.isStatic);
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
  static [P] = 1;
  @checker('method', function() {return 'abc';})
  static [M]() {}
  @checker('getter', function() {return this[P] * 2})
  static get [G]() {
    return this[P];
  }
  @checker('setter', function() {this[P] = v * 2})
  static set [G](v) {
    this[P] = v;
  }
  @checker('auto-accessor')
  static accessor [A] = 2;
}

console.assert (typeof MyClass[ P ] === 'number');
console.assert (typeof MyClass[ A ] === 'number');
console.assert (typeof MyClass[ G ] === 'number');
console.assert (typeof MyClass[ M ] === 'function');

console.assert (MyClass[ P ] === 2);
console.assert (MyClass[ A ] === 9);
MyClass[ A ] = 2;
console.assert (MyClass[ A ] === 18);
console.assert (MyClass[ G ] === 4);
console.assert (MyClass[ M ] () === 'abc');

