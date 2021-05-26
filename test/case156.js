function decorator (value, context) {
  if (
    (context.kind === 'method' || context.kind === 'getter' || context.kind === 'setter') &&
    context.isStatic && context.addInitializer) {
    context.addInitializer(function () {
      this.test = 10;
    });
    return function (...args) {
      console.log (`starting ${ context.kind } ${ context.name } ${ context.kind !== 'getter' ? `with arguments ${ args.join (', ') }` : '' }`);
      const ret = value (args[0] * 2);
      console.log (`ending ${ context.name }`);
      return ret * 2;
    };
  }
}

class C {
  static #other = 0;

  @init:decorator
  static get #P () {
    return C.#other;
  }

  @init:decorator
  static set #P (v) {
    return C.#other = v;
  }
  
  static get check () {
    return C.#P;
  }
  static set check(v) {
    return C.#P = v;
  }
}

console.assert (C.check  === 0);
C.check = 20;
console.assert (C.check  === 80);
console.assert (C.test === 10);