function double(value, context) {
  return function (v) {
    return value.call(this, v * 2);
  }
}

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
  @double
  set [G](v) {
    return this[P] = v;
  }
}

const c = new C();

console.assert(c[P] === 10, 'c[P] === 10');
console.assert(c[M]() === 10, 'c[M]() === 10');
c[G] = 30
console.assert(c[G] === 60, 'c[G] === 60');
console.assert(c[P] === 60, 'c[P] === 60');