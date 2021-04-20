function double(value, context) {
  return function (v) {
    return value.call(this, v) * 2;
  }
}

const P = Symbol();
const M = Symbol();
const G = Symbol();

class C {
  [P] = 10;
  @double
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

console.assert(c[P] === 10, 'c[P] === 10');
console.assert(c[M]() === 20, 'c[M]() === 20');
c[G] = 30
console.assert(c[G] === 30, 'c[G] === 30');
console.assert(c[P] === 30, 'c[P] === 30');