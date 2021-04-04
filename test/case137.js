function decorator (value, context) {
  if (context.kind === 'init-method') {
    return {
      method(...args) {
        console.log (`starting ${ context.name } with arguments ${ args.join (', ') }`);
        const ret = value.call (this, ...args);
        console.log (`ending ${ context.name }`);
        return ret;
      },
      initialize() {
        this.test = 10;
      }
    };
  }
}

@init:decorator
class C {
  @init:decorator
  static #M () {
    return true;
  }
  static check() {
    return this.#M;
  }
}

console.assert(C.check ());
console.assert(C.test === 10);