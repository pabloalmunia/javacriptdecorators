function decorator (value, context) {
  if (context.kind === 'method' || context.kind === 'getter' || context.kind === 'setter') {
    return function (...args) {
      console.log (`starting ${ context.name } with arguments ${ args.join (', ') }`);
      const ret = value.call (this, ...args);
      console.log (`ending ${ context.name }`);
      return ret;
    };
  }
}

class C {
  static #other = 0;
  @decorator
  static set #p(v) {
    C.#other = v;
  }
  static get #p() {
    return C.#other;
  }
  static set(v) {
    C.#p = v;
  }
  static check() {
    return C.#p;
  }
}

C.set(100);
console.assert (C.check () === 100);