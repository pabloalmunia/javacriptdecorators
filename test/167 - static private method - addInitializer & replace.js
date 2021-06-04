const log = [];

function decorator (value, context) {
  if (context.kind === 'method' && context.addInitializer) {
    context.addInitializer (function () {
      log.push (`initializing ${ context.name }`);
    });
    return function (...args) {
      log.push (`starting ${ context.name } with arguments ${ args.join (', ') }`);
      const ret = value.call (this, ...args);
      log.push (`ending ${ context.name }`);
      return ret;
    };
  }
}

class C {
  @init:decorator
  static #m (v) {
    return v * 2;
  }
  static check(v) {
    return this.#m(v)
  }
}

console.assert (C.check (2) === 4);
console.assert (log[ 0 ] === 'initializing #m');
console.assert (log[ 1 ] === 'starting #m with arguments 2');
console.assert (log[ 2 ] === 'ending #m');