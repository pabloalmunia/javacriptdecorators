function decorator(value, context) {
  console.log("value", value);
  console.log("context", context);
  return {
    set(v) {
      value.call(this, v * 2);
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

const _member_initializers_b8nkc4mg038 = [];

const _symbol_o0cdu4ganho = Symbol();

class C {
  constructor() {
    _member_initializers_b8nkc4mg038.forEach(initialize => initialize.call(this));
  }
  #other = 10;
  get #p() {
    return this.#other;
  }
  _temp_a3j9i1spj(v) {
    this.#other = v;
  }
  static [_symbol_o0cdu4ganho] = __applyDecorator(decorator(C.prototype._temp_a3j9i1spj, {
    kind: "init-setter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C.prototype[_symbol_o0cdu4ganho]
    },
    defineMetadata: __DefineMetadata(C.prototype, "#p")
  }), C.prototype._temp_a3j9i1spj, _member_initializers_b8nkc4mg038);
  set #p(v) {
    return C[_symbol_o0cdu4ganho].bind(this)(v);
  }
  [_symbol_o0cdu4ganho]() {
    return C[_symbol_o0cdu4ganho].bind(this);
  }
  set check(v) {
    this.#p = v;
  }
  get check() {
    return this.#p;
  }
}

delete C.prototype._temp_a3j9i1spj;

console.assert(new C().test === 10);

const c = new C();

c.check = 20;

console.assert(c.check === 40);