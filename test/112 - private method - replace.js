const log = [];
function decorator (value, context) {
  debugger;
  if (context.kind === 'method') {
    return function (...args) {
      log.push (`starting ${ context.name } with arguments ${ args.join (', ') }`);
      const ret = value.call (this, ...args);
      log.push (`ending ${ context.name }`);
      return ret;
    };
  }
}

class C {
  @decorator
  #m (v) {
    return v * 2;
  }
  check (v) {
    return this.#m (v);
  }
}

console.assert (new C ().check (1) === 2);
console.assert (log[ 0 ] === `starting #m with arguments 1`);
console.assert (log[ 1 ] === `ending #m`);