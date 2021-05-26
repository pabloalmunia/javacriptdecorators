function decorator (value, context) {
  if (context.kind === 'method' && context.addInitializer) {
    context.addInitializer (function () {
      console.log (`initializing ${ context.name }`);
    });
    return function (...args) {
      console.log (`starting ${ context.name } with arguments ${ args.join (', ') }`);
      const ret = value.call (this, ...args);
      console.log (`ending ${ context.name }`);
      return ret;
    };
  }
}

class C {
  @init:decorator
  m () {
  }
}

new C ().m ();