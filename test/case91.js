function decorator(value, context) {
  if (context.kind === "method") {
    return function (...args) {
      console.log(`starting ${context.name} with arguments ${args.join(", ")}`);
      const ret = value.call(this, ...args);
      console.log(`ending ${context.name}`);
      return ret;
    };
  }
}

class C {
  #multi = 2;
  @decorator
  #m(v) {
    return v * this.#multi;
  }
  check(v) {
    return this.#m(v);
  }
}

console.assert(new C().check(100) === 200);