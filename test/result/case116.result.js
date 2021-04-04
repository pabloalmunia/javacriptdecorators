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

const _member_initializers_6gpdfp1jrr = [];

const _symbol_c2rshd8t3pg = Symbol();

class C {
  constructor() {
    _member_initializers_6gpdfp1jrr.forEach(initialize => initialize.call(this));
  }
  _temp_oj8del6p9eo(v) {}
  static [_symbol_c2rshd8t3pg] = __applyDecorator(decorator(C.prototype._temp_oj8del6p9eo, {
    kind: "init-setter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C.prototype[_symbol_c2rshd8t3pg]
    },
    defineMetadata: __DefineMetadata(C.prototype, "#p")
  }), C.prototype._temp_oj8del6p9eo, _member_initializers_6gpdfp1jrr);
  set #p(v) {
    return C[_symbol_c2rshd8t3pg].bind(this)(v);
  }
  [_symbol_c2rshd8t3pg]() {
    return C[_symbol_c2rshd8t3pg].bind(this);
  }
}

delete C.prototype._temp_oj8del6p9eo;

console.assert(new C().test === 10);