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
  static #m() {}
  static check () {
    return this.#m;
  }
}

console.assert(C.check().one === 1);
console.assert(C.check().two === 2);