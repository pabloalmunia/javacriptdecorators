function decorator (value, context) {
  if (
    (context.kind === 'method' || context.kind === 'getter' || context.kind === 'setter') &&
    context.isStatic) {
    return function (...args) {
      console.log (`starting ${ context.name } with arguments ${ args.join (', ') }`);
      const ret = value (...args);
      console.log (`ending ${ context.name }`);
      return ret;
    };
  }
}

class C {
  static #other = 0;
  
  @decorator
  static get #P () {
    return C.#other;
  }
  
  static check () {
    return C.#P;
  }
}

console.assert (C.check () === 0);