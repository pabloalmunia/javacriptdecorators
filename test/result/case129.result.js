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
      return v / 3;
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

const _C_p_get_symbol_0psb7g = Symbol();

const _C_p_set_symbol_g5ln7g = Symbol();

let _C_p_getter_nn6ls;

let _C_p_setter_0cntfo;

let _C_p_initializer_i7vm9;

const _C_member_initializers_fmnt68 = [];

class C {
  constructor() {
    _C_member_initializers_fmnt68.forEach(initialize => initialize.call(this));
  }
  #_p_private_property_d7d0u = _C_p_initializer_i7vm9.call(this, 30);
  get #p() {
    return _C_p_getter_nn6ls.call(this);
  }
  set #p(v) {
    return _C_p_setter_0cntfo.call(this, v);
  }
  static _C_p_getter_nn6ls() {
    return this.#_p_private_property_d7d0u;
  }
  static _C_p_setter_0cntfo(v) {
    this.#_p_private_property_d7d0u = v;
  }
  [_C_p_get_symbol_0psb7g]() {
    return this.#p;
  }
  [_C_p_set_symbol_g5ln7g](v) {
    this.#p = v;
  }
  get check() {
    return this.#p;
  }
  set check(v) {
    this.#p = v;
  }
}

_C_p_getter_nn6ls = C._C_p_getter_nn6ls;

_C_p_setter_0cntfo = C._C_p_setter_0cntfo;

delete C._C_p_getter_nn6ls;

delete C._C_p_setter_0cntfo;

const _C_p_result_qbor28 = deco({
  get: _C_p_getter_nn6ls,
  set: _C_p_setter_0cntfo
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C.prototype[_C_p_get_symbol_0psb7g],
    set: C.prototype[_C_p_set_symbol_g5ln7g]
  },
  isStatic: false,
  isPrivate: true,
  defineMetadata: __DefineMetadata(C.prototype, "#p"),
  addInitializer: initializer => _C_member_initializers_fmnt68.push(initializer)
}) || {};

_C_p_initializer_i7vm9 = _C_p_result_qbor28.initialize || (v => v);

_C_p_getter_nn6ls = _C_p_result_qbor28.get || _C_p_getter_nn6ls;

_C_p_setter_0cntfo = _C_p_result_qbor28.set || _C_p_setter_0cntfo;

const c = new C();

console.assert(c.test === 10);

console.assert(c.check === 20);

c.check = 3;

console.assert(c.check === 2);