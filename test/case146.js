function decorator (value, context) {
  if (
    (context.kind === 'method' || context.kind === 'getter' || context.kind === 'setter') &&
    context.isStatic && context.addInitializer) {
    context.addInitializer(function () {
      this.test = 10;
    });
    return function (...args) {
      console.log (`starting ${ context.name } with arguments ${ args.join (', ') }`);
      const ret = value (...args);
      console.log (`ending ${ context.name }`);
      return ret * 2;
    };
  }
}

class C {
  static #other = 2;

  @init:decorator
  static get #P () {
    return C.#other;
  }
  
  static check () {
    return C.#P;
  }
}

console.assert (C.check () === 4);
console.assert (C.test === 10);