function decorator(value, context) {
  console.log("value", value);
  console.log("context", context);
  return {
    initialize() {
      this.test = 10;
    }
  };
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

function __applyDecorator(result, origin, collection) {
  if (typeof result === "undefined") {
    return origin;
  }
  if (typeof result === "function") {
    return result;
  }
  if (typeof result === "object") {
    if (typeof result.initialize === "function") {
      collection.push(result.initialize);
    }
    return result.method || result.get || result.set || result.definition || origin;
  }
  throw new TypeError("invalid decorator return");
}

const _member_initializers_7cmujon6kuo = [];

const _symbol_t7vcd9aafto = Symbol();

class C {
  constructor() {
    _member_initializers_7cmujon6kuo.forEach(initialize => initialize.call(this));
  }
  _temp_4et315353to() {}
  static [_symbol_t7vcd9aafto] = __applyDecorator(decorator(C.prototype._temp_4et315353to, {
    kind: "init-method",
    name: "#m",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C.prototype[_symbol_t7vcd9aafto]
    },
    defineMetadata: __DefineMetadata(C.prototype, "#m")
  }), C.prototype._temp_4et315353to, _member_initializers_7cmujon6kuo);
  static [_symbol_t7vcd9aafto] = __applyDecorator(decorator(C.prototype.undefined, {
    kind: "init-method",
    name: "#m",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C.prototype[_symbol_t7vcd9aafto]
    },
    defineMetadata: __DefineMetadata(C.prototype, "#m")
  }), C[_symbol_t7vcd9aafto], _member_initializers_7cmujon6kuo);
  #m = C[_symbol_t7vcd9aafto];
  [_symbol_t7vcd9aafto]() {
    return this.#m;
  }
}

delete C.prototype._temp_4et315353to;

console.assert(new C().test === 10);