function decorator (value, context) {
  if (
    (context.kind === 'method' || context.kind === 'getter' || context.kind === 'setter' ||
      context.kind === 'init-method' || context.kind === 'init-getter' || context.kind === 'init-setter') &&
    context.isStatic) {
    return {
      set (...args) {
        console.log (`starting ${ context.name } with arguments ${ args.join (', ') }`);
        const ret = value (...args);
        console.log (`ending ${ context.name }`);
        return ret;
      },
      initialize (v) {
        console.log('initialize class')
        this.test = 10;
      }
    };
  }
}

class C {
  static #other = 0;

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
console.assert (C.check  === 20);
console.assert (C.test === 10);