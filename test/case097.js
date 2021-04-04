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

class C {
@init:decorator
  #m () {
    return true;
  }
  check() {
    return this.#m;
  }
}

console.assert(new C().check ());
console.assert(new C().test === 10);