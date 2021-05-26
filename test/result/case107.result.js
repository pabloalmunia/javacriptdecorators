function decorator(value, context) {
  if (context.kind === "getter") {
    context.addInitializer(function() {
      this.test = 10;
    });
    return function() {
      return value.call(this) * 2;
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

const _C_member_initializers_gnlbq8 = [];

const _C_p_symbol_9r717 = Symbol();

class C {
  constructor() {
    _C_member_initializers_gnlbq8.forEach(initialize => initialize.call(this));
  }
  #other = 10;
  _C_p_temp_l59km() {
    return this.#other;
  }
  static [_C_p_symbol_9r717] = decorator(C.prototype._C_p_temp_l59km, {
    kind: "getter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C.prototype[_C_p_symbol_9r717]
    },
    defineMetadata: __DefineMetadata(C.prototype, "#p"),
    addInitializer: initializer => _C_member_initializers_gnlbq8.push(initializer)
  }) ?? C.prototype._C_p_temp_l59km;
  get #p() {
    return C[_C_p_symbol_9r717].bind(this)();
  }
  [_C_p_symbol_9r717]() {
    return C[_C_p_symbol_9r717].bind(this);
  }
  check() {
    return this.#p;
  }
}

delete C.prototype._C_p_temp_l59km;

console.assert(new C().test === 10);

console.assert(new C().check() === 20);