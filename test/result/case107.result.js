function decorator(value, context) {
  console.log("value", value);
  console.log("context", context);
  return {
    get() {
      return value.call(this) * 2;
    },
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

const _member_initializers_07r473dlgv = [];

const _symbol_vj70dke3sr = Symbol();

class C {
  constructor() {
    _member_initializers_07r473dlgv.forEach(initialize => initialize.call(this));
  }
  #other = 10;
  _temp_8nkc8mfu2hg() {
    return this.#other;
  }
  static [_symbol_vj70dke3sr] = __applyDecorator(decorator(C.prototype._temp_8nkc8mfu2hg, {
    kind: "init-getter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C.prototype[_symbol_vj70dke3sr]
    },
    defineMetadata: __DefineMetadata(C.prototype, "#p")
  }), C.prototype._temp_8nkc8mfu2hg, _member_initializers_07r473dlgv);
  get #p() {
    return C[_symbol_vj70dke3sr].bind(this)();
  }
  [_symbol_vj70dke3sr]() {
    return C[_symbol_vj70dke3sr].bind(this);
  }
  check() {
    return this.#p;
  }
}

delete C.prototype._temp_8nkc8mfu2hg;

console.assert(new C().test === 10);

console.assert(new C().check() === 20);