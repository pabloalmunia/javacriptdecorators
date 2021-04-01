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

const _symbol_j9ds3r0t4i = Symbol();

class C {
  #other = 0;
  _temp_7btelf0dn5o(v) {
    this.#other = v;
  }
  static [_symbol_j9ds3r0t4i] = decorator(C.prototype._temp_7btelf0dn5o, {
    kind: "setter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C.prototype[_symbol_j9ds3r0t4i]
    },
    defineMetadata: __DefineMetadata(C.prototype, "#p")
  }) ?? C.prototype._temp_7btelf0dn5o;
  set #p(v) {
    return C[_symbol_j9ds3r0t4i].bind(this)(v);
  }
  [_symbol_j9ds3r0t4i]() {
    return C[_symbol_j9ds3r0t4i].bind(this);
  }
  get #p() {
    return this.#other;
  }
  set(v) {
    this.#p = v;
  }
  check() {
    return this.#p;
  }
}

delete C.prototype._temp_7btelf0dn5o;

const c = new C();

c.set(100);

console.assert(c.check() === 100);