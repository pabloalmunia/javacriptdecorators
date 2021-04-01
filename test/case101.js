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
  #o = 100;
  
  @decorator
  get #p () {
    return this.#o;
  }
  
  check () {
    return this.#p;
  }
}

const c = new C ();
console.assert (c.check () === 100);