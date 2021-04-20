const P = Symbol();
const M = Symbol();
const G = Symbol();

class C {
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

console.assert(C[P] === 10, 'c[P] === 10');
console.assert(C[M]() === 10, 'c[M]() === 10');
C[G] = 20
console.assert(C[G] === 20, 'c[G] === 20');
console.assert(C[P] === 20, 'c[P] === 20');