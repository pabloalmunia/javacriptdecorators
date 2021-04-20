function double(value, context) {
  return (v) => v * 2;
}

const P = Symbol();
const M = Symbol();
const G = Symbol();

class C {
  @double
  [P] = 10;
  [M]() {
    return this[P];
  }
  get [G]() {
    return this[P];
  }
  set [G](v) {
    return this[P] = v;
  }
}

const c = new C();

console.assert(c[P] === 20, 'c[P] === 20');
console.assert(c[M]() === 20, 'c[M]() === 20');
c[G] = 30
console.assert(c[G] === 30, 'c[G] === 30');
console.assert(c[P] === 30, 'c[P] === 30');