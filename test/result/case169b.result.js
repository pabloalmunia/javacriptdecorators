function deco(value, context) {
  context.addInitializer(function() {
    this.test = 10;
  });
  return {
    get() {
      return value.get.call(this) * 2;
    },
    set(v) {
      value.set.call(this, v / 3);
    },
    initialize(v) {
      return v * 2;
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

const _C_p_get_symbol_u5e7fo = Symbol();

const _C_p_set_symbol_bmgi2 = Symbol();

let _C_p_getter_1u9r7o;

let _C_p_setter_8dr26o;

const _C_static_initializers_6hmab8 = [];

class C {
  static #_p_private_property_9mi0ko = 10;
  static get #p() {
    return _C_p_getter_1u9r7o.call(this);
  }
  static set #p(v) {
    return _C_p_setter_8dr26o.call(this, v);
  }
  static _C_p_getter_1u9r7o() {
    return this.#_p_private_property_9mi0ko;
  }
  static _C_p_setter_8dr26o(v) {
    this.#_p_private_property_9mi0ko = v;
  }
  static [_C_p_get_symbol_u5e7fo]() {
    return C.#p;
  }
  static [_C_p_set_symbol_bmgi2](v) {
    C.#p = v;
  }
  static get check() {
    return C.#p;
  }
  static set check(v) {
    C.#p = v;
  }
}

const _C_p_initializer_s5h40g = {
  get: C._C_p_getter_1u9r7o,
  set: C._C_p_setter_8dr26o
};

_C_p_getter_1u9r7o = C._C_p_getter_1u9r7o;

_C_p_setter_8dr26o = C._C_p_setter_8dr26o;

delete C._C_p_getter_1u9r7o;

delete C._C_p_setter_8dr26o;

const _C_p_result_8a8j1 = deco({
  get: _C_p_getter_1u9r7o,
  set: _C_p_setter_8dr26o
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C[_C_p_get_symbol_u5e7fo],
    set: C[_C_p_set_symbol_bmgi2]
  },
  isStatic: true,
  isPrivate: true,
  defineMetadata: __DefineMetadata(C, "#p"),
  addInitializer: initializer => _C_static_initializers_6hmab8.push(initializer)
}) || {};

_C_p_initializer_s5h40g.set.call(
  C,
  (_C_p_result_8a8j1.initialize || (v => v))(_C_p_initializer_s5h40g.get.call(C))
);

_C_p_getter_1u9r7o = _C_p_result_8a8j1.get || _C_p_getter_1u9r7o;

_C_p_setter_8dr26o = _C_p_result_8a8j1.set || _C_p_setter_8dr26o;

_C_static_initializers_6hmab8.forEach(initialize => initialize.call(C, C));

console.assert(C.test === 10);

console.assert(C.check === 40);

C.check = 3;

console.assert(C.check === 2);