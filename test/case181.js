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
  static accessor [A] = 10;
}

console.assert(C[A] === 10);
C[A] = 20;
console.assert(C[A] === 40);