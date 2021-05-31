const log = [];
function decorator(value, context) {
  console.assert(context.kind === 'method');
  console.assert(context.name === 'm');
  console.assert(typeof context.setMetadata === 'function');
  console.assert(typeof context.getMetadata === 'function');
  if (context.kind === "method") {
    return function (...args) {
      log.push(`starting ${context.name} with arguments ${args.join(", ")}`);
      const ret = value.call(this, ...args);
      log.push(`ending ${context.name}`);
      return ret;
    };
  }
}

class C {
  @decorator
  m(v) {
    return v * 2;
  }
}

console.assert(new C().m(1) === 2);
console.assert(log[0] === `starting m with arguments 1`)
console.assert(log[1] === `ending m`)