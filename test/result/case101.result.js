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

const _symbol_dinrl0kho3 = Symbol();

class C {
  #o = 100;
  _temp_92e0fhacj() {
    return this.#o;
  }
  static [_symbol_dinrl0kho3] = decorator(C.prototype._temp_92e0fhacj, {
    kind: "getter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C.prototype[_symbol_dinrl0kho3]
    },
    defineMetadata: __DefineMetadata(C.prototype, "#p")
  }) ?? C.prototype._temp_92e0fhacj;
  get #p() {
    return C[_symbol_dinrl0kho3].bind(this)();
  }
  [_symbol_dinrl0kho3]() {
    return C[_symbol_dinrl0kho3].bind(this);
  }
  check() {
    return this.#p;
  }
}

delete C.prototype._temp_92e0fhacj;

const c = new C();

console.assert(c.check() === 100);