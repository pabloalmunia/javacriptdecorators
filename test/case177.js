function double(value, context) {
  return function (v) {
    return value.call(this, v) * 2;
  }
}

const P = Symbol();
const M = Symbol();
const G = Symbol();

class C {
  static [P] = 10;
  static [M]() {
    return this[P];
  }
  @double
  static get [G]() {
    return this[P];
  }
  static set [G](v) {
    return this[P] = v;
  }
}

console.assert(C[P] === 10, 'C[P] === 10');
console.assert(C[M]() === 10, 'C[M]() === 10');
C[G] = 30
console.assert(C[G] === 60, 'C[G] === 60');
console.assert(C[P] === 30, 'C[P] === 30');