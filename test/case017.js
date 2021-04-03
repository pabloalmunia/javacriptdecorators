function decorator(value, context) {
  if (context.kind === "init-method") {
    return {
      method (...args) {
        console.log(`starting ${context.name} with arguments ${args.join(", ")}`);
        const ret = value.call(this, ...args);
        console.log(`ending ${context.name}`);
        return ret;
      },
      initialize() {
        console.log(`initializing ${context.name}`);
      }
    };
  }
}

class C {
  @init:decorator
  m() {}
}

new C().m();