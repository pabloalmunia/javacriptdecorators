function deco1(value, context) {
  return {
    get() {
      return value.get.call(this) * 2;
    },
    set(v) {
      value.set.call(this, v / 3);
    }
  };
}

function deco2(value, context) {
  return {
    get() {
      console.log(context.name, "get");
      return value.get.call(this);
    },
    set(v) {
      console.log(context.name, "set", v);
      return value.set.call(this, v);
    },
    initialize() {
      return 20;
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

const _symbol_hnfngf86gmg = Symbol();

const _symbol_7i8quliie5o = Symbol();

let _getter_na4l5o0ta2;

let _setter_2l3nlctgflo;

let _initializer_j4uekrf55eo;

let _initializer_fvo6qgaqe8;

class C {
  #_property_uob313lhfq8 = _initializer_fvo6qgaqe8.call(this, _initializer_j4uekrf55eo.call(this, 10));
  get #p() {
    return _getter_na4l5o0ta2.call(this);
  }
  set #p(v) {
    return _setter_2l3nlctgflo.call(this, v);
  }
  static _getter_na4l5o0ta2() {
    return this.#_property_uob313lhfq8;
  }
  static _setter_2l3nlctgflo(v) {
    this.#_property_uob313lhfq8 = v;
  }
  [_symbol_hnfngf86gmg]() {
    return this.#p;
  }
  [_symbol_7i8quliie5o](v) {
    this.#p = v;
  }
  get check() {
    return this.#p;
  }
  set check(v) {
    this.#p = v;
  }
}

_getter_na4l5o0ta2 = C._getter_na4l5o0ta2;

_setter_2l3nlctgflo = C._setter_2l3nlctgflo;

delete C._getter_na4l5o0ta2;

delete C._setter_2l3nlctgflo;

const _result_hvbt6r4csr8 = deco1({
  get: _getter_na4l5o0ta2,
  set: _setter_2l3nlctgflo
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C.prototype[_symbol_hnfngf86gmg],
    set: C.prototype[_symbol_7i8quliie5o]
  },
  isStatic: false,
  isPrivate: true,
  defineMetadata: __DefineMetadata(C.prototype, "#p")
}) || {};

_initializer_fvo6qgaqe8 = _result_hvbt6r4csr8.initialize || (v => v);

_getter_na4l5o0ta2 = _result_hvbt6r4csr8.get || _getter_na4l5o0ta2;

_setter_2l3nlctgflo = _result_hvbt6r4csr8.set || _setter_2l3nlctgflo;

const _result_8pgt351k1qg = deco2({
  get: _getter_na4l5o0ta2,
  set: _setter_2l3nlctgflo
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C.prototype[_symbol_hnfngf86gmg],
    set: C.prototype[_symbol_7i8quliie5o]
  },
  isStatic: false,
  isPrivate: true,
  defineMetadata: __DefineMetadata(C.prototype, "#p")
}) || {};

_initializer_j4uekrf55eo = _result_8pgt351k1qg.initialize || (v => v);

_getter_na4l5o0ta2 = _result_8pgt351k1qg.get || _getter_na4l5o0ta2;

_setter_2l3nlctgflo = _result_8pgt351k1qg.set || _setter_2l3nlctgflo;

const c = new C();

debugger;

console.assert(c.check === 40);

c.check = 3;

console.assert(c.check === 2);