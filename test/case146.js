function decorator (value, context) {
  if (
    (context.kind === 'method' || context.kind === 'getter' || context.kind === 'setter' ||
      context.kind === 'init-method' || context.kind === 'init-getter' || context.kind === 'init-setter') &&
    context.isStatic) {
    return {
      get (...args) {
        console.log (`starting ${ context.name } with arguments ${ args.join (', ') }`);
        const ret = value (...args);
        console.log (`ending ${ context.name }`);
        return ret;
      },
      initialize () {
        this.test = 10;
      }
    };
  }
}

class C {
  static #other = 0;

@init:decorator
  static get #P () {
    return C.#other;
  }
  
  static check () {
    return C.#P;
  }
}

console.assert (C.check () === 0);
console.assert (C.test === 10);