function logger(value, context) {
  if (context.kind === "method") {
    return function(...args) {
      console.log(`starting ${context.name} with arguments ${args.join(", ")}`);
      const ret = value.call(this, ...args);
      console.log(`ending ${context.name}`);
      return ret;
    };
  }
}

function duplicate(value, context) {
  if (context.kind === "method") {
    return function(v) {
      return value.call(this, v * 2);
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

const _symbol_guiik9uf1lg = Symbol();

class C {
  #multi = 2;
  _temp_p9jf6md6us8(v) {
    return v * this.#multi;
  }
  static [_symbol_guiik9uf1lg] = logger(C.prototype._temp_p9jf6md6us8, {
    kind: "method",
    name: "#double",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C.prototype[_symbol_guiik9uf1lg]
    },
    defineMetadata: __DefineMetadata(C.prototype, "#double")
  }) ?? C.prototype._temp_p9jf6md6us8;
  static [_symbol_guiik9uf1lg] = duplicate(C[_symbol_guiik9uf1lg], {
    kind: "method",
    name: "#double",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C.prototype[_symbol_guiik9uf1lg]
    },
    defineMetadata: __DefineMetadata(C.prototype, "#double")
  }) ?? C[_symbol_guiik9uf1lg];
  #double = C[_symbol_guiik9uf1lg];
  [_symbol_guiik9uf1lg]() {
    return this.#double;
  }
  checker(v) {
    return this.#double(v);
  }
}

delete C.prototype._temp_p9jf6md6us8;

console.assert(new C().checker(10) === 40);