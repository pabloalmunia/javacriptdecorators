function double(value, context) {
  return {
    set(v) {
      value.set.call(this, v * 2);
    }
  }
}

const A = Symbol();

class C {
  @double
  accessor [A] = 10;
}

const c = new C();
console.assert(c[A] === 10);
c[A] = 20;
console.assert(c[A] === 40);