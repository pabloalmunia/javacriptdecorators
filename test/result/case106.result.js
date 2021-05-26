function decorator(value, context) {
  console.log("value", value);
  console.log("context", context);
  context.addInitializer(function() {
    this.test = 10;
  });
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

const _C_member_initializers_4tl42g = [];

const _C_p_symbol_lqspi8 = Symbol();

class C {
  constructor() {
    _C_member_initializers_4tl42g.forEach(initialize => initialize.call(this));
  }
  _C_p_temp_orkei() {}
  static [_C_p_symbol_lqspi8] = decorator(C.prototype._C_p_temp_orkei, {
    kind: "getter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C.prototype[_C_p_symbol_lqspi8]
    },
    defineMetadata: __DefineMetadata(C.prototype, "#p"),
    addInitializer: initializer => _C_member_initializers_4tl42g.push(initializer)
  }) ?? C.prototype._C_p_temp_orkei;
  get #p() {
    return C[_C_p_symbol_lqspi8].bind(this)();
  }
  [_C_p_symbol_lqspi8]() {
    return C[_C_p_symbol_lqspi8].bind(this);
  }
}

delete C.prototype._C_p_temp_orkei;

console.assert(new C().test === 10);