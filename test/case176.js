function double(value, context) {
  return (v) => v * 2;
}

const P = Symbol();
const M = Symbol();
const G = Symbol();

class C {
  @double
  static [P] = 10;
  static [M]() {
    return this[P];
  }
  static get [G]() {
    return this[P];
  }
  static set [G](v) {
    return this[P] = v;
  }
}

console.assert(C[P] === 20, 'C[P] === 20');
console.assert(C[M]() === 20, 'C[M]() === 20');
C[G] = 30
console.assert(C[G] === 30, 'C[G] === 30');
console.assert(C[P] === 30, 'C[P] === 30');