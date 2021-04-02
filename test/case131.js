function decorator(value, context) {
  if (context.kind === "method" && context.isStatic) {
    return function (...args) {
      console.log(`starting ${context.name} with arguments ${args.join(", ")}`);
      const ret = value(...args);
      console.log(`ending ${context.name}`);
      return ret;
    };
  }
}

class C {
  @decorator
  static #M() {
    return 101;
  }
  static check() {
    return C.#M()
  }
}

console.assert(C.check() === 101);