const log = [];

function decorator (value, context) {
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
  static M () {
  }
}

C.M(1);
console.assert(log[0] === 'starting M with arguments 1');
console.assert(log[1] === 'ending M');