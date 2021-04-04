function decorator (value, context) {
  if (context.kind === 'method') {
    return function (...args) {
      console.log (`starting ${ context.name } with arguments ${ args.join (', ') }`);
      const ret = value.call (this, ...args);
      console.log (`ending ${ context.name }`);
      return ret;
    };
  }
}

@init:decorator
class C {
  @init:decorator
  static M () {
    return true;
  }
}

console.assert(C.M ());