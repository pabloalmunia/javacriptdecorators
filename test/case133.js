function decorator1(value, context) {
  if (context.kind === "method") {
    value.one = 1;
  }
}
function decorator2(value, context) {
  if (context.kind === "method") {
    value.two = 2;
  }
}

class C {
  @decorator1
  @decorator2
  static #M() {}
  static check() {
    return C.#M;
  }
}

console.log(C.check().one);
console.log(C.check().two);