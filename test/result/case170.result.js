const P = Symbol();

const M = Symbol();

const G = Symbol();

class C {
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

console.assert(c[P] === 10, "c[P] === 10");

console.assert(c[M]() === 10, "c[M]() === 10");

c[G] = 20;

console.assert(c[G] === 20, "c[G] === 20");

console.assert(c[P] === 20, "c[P] === 20");