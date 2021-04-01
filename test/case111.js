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
  #other = 0;
  @decorator
  set #p(v) {
    this.#other = v;
  }
  get #p() {
    return this.#other;
  }
  set(v) {
    this.#p = v;
  }
  check() {
    return this.#p;
  }
}

const c = new C ();
c.set(100);
console.assert (c.check () === 100);