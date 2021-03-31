function logger(value, context) {
  if (context.kind === "method") {
    return function (...args) {
      console.log(`starting ${context.name} with arguments ${args.join(", ")}`);
      const ret = value.call(this, ...args);
      console.log(`ending ${context.name}`);
      return ret;
    };
  }
}
function duplicate(value, context) {
  if (context.kind === "method") {
    return function (v) {
      return value.call(this, v * 2);
    };
  }
}

class C {
  #multi = 2;
  
  @logger
  @duplicate
  #double(v) {
    return v * this.#multi;
  }
  checker(v) {
    return this.#double(v);
  }
}

console.assert(new C().checker(10) === 40)