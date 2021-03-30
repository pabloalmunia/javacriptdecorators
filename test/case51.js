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

@class_decorator
class C {
  @decorator
  static M() {}
}

C.M();