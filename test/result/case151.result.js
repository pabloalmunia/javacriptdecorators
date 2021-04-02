function decorator(value, context) {
  if (context.kind === "method" || context.kind === "getter" || context.kind === "setter") {
    return function(...args) {
      console.log(`starting ${context.name} with arguments ${args.join(", ")}`);
      const ret = value.call(this, ...args);
      console.log(`ending ${context.name}`);
      return ret;
    };
  }
}

if (!Symbol.metadata) {
  Symbol.metadata = Symbol();
}

function __DefineMetadata(base, name) {
  return function(key, value) {
    if (!base[Symbol.metadata]) {
      base[Symbol.metadata] = Object.create(null);
    }
    if (!base[Symbol.metadata][name]) {
      base[Symbol.metadata][name] = {};
    }
    const db = base[Symbol.metadata][name];
    if (key in db) {
      if (!Array.isArray(db[key])) {
        return db[key] = [db[key], value];
      }
      return db[key].push(value);
    }
    return db[key] = value;
  };
}

const _symbol_h3ec2fb9rk8 = Symbol();

class C {
  static #other = 0;
  static _temp_8u5h4jv6128(v) {
    C.#other = v;
  }
  static [_symbol_h3ec2fb9rk8] = decorator(C._temp_8u5h4jv6128, {
    kind: "setter",
    name: "#p",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_symbol_h3ec2fb9rk8]
    },
    defineMetadata: __DefineMetadata(C, "#p")
  }) ?? C._temp_8u5h4jv6128;
  static set #p(v) {
    return C[_symbol_h3ec2fb9rk8].bind(this)(v);
  }
  static [_symbol_h3ec2fb9rk8]() {
    return C[_symbol_h3ec2fb9rk8].bind(this);
  }
  static get #p() {
    return C.#other;
  }
  static set(v) {
    C.#p = v;
  }
  static check() {
    return C.#p;
  }
}

delete C._temp_8u5h4jv6128;

C.set(100);

console.assert(C.check() === 100);