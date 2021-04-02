function decorator(value, context) {
  if (context.kind === "method") {
    value.extra = true;
  }
}

class C {
  @decorator
  static #M() {}
  static check() {
    return C.#M;
  }
}

console.log(C.check().extra);