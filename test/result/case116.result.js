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

const _C_member_initializers_0kdd3 = [];

const _C_p_symbol_o8c4ng = Symbol();

class C {
  constructor() {
    _C_member_initializers_0kdd3.forEach(initialize => initialize.call(this));
  }
  _C_p_temp_lnf4p8(v) {}
  static [_C_p_symbol_o8c4ng] = decorator(C.prototype._C_p_temp_lnf4p8, {
    kind: "setter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C.prototype[_C_p_symbol_o8c4ng]
    },
    defineMetadata: __DefineMetadata(C.prototype, "#p"),
    addInitializer: initializer => _C_member_initializers_0kdd3.push(initializer)
  }) ?? C.prototype._C_p_temp_lnf4p8;
  set #p(v) {
    return C[_C_p_symbol_o8c4ng].bind(this)(v);
  }
  [_C_p_symbol_o8c4ng]() {
    return C[_C_p_symbol_o8c4ng].bind(this);
  }
}

delete C.prototype._C_p_temp_lnf4p8;

console.assert(new C().test === 10);