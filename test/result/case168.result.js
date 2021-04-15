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

const _symbol_7oeftbs35ho = Symbol();

const _symbol_r0qefpvibl8 = Symbol();

let _getter_hra4rtdd158;

let _setter_lkcbe7vlvp8;

class C {
  static #_property_lgr1951svno = 10;
  static get #p() {
    return _getter_hra4rtdd158.call(this);
  }
  static set #p(v) {
    return _setter_lkcbe7vlvp8.call(this, v);
  }
  static _getter_hra4rtdd158() {
    return this.#_property_lgr1951svno;
  }
  static _setter_lkcbe7vlvp8(v) {
    this.#_property_lgr1951svno = v;
  }
  static [_symbol_7oeftbs35ho]() {
    return C.#p;
  }
  static [_symbol_r0qefpvibl8](v) {
    C.#p = v;
  }
  static get check() {
    return C.#p;
  }
  static set check(v) {
    C.#p = v;
  }
}

const _initializer_ti8cv7lo95o = {
  get: C._getter_hra4rtdd158,
  set: C._setter_lkcbe7vlvp8
};

_getter_hra4rtdd158 = C._getter_hra4rtdd158;

_setter_lkcbe7vlvp8 = C._setter_lkcbe7vlvp8;

delete C._getter_hra4rtdd158;

delete C._setter_lkcbe7vlvp8;

const _result_q5mmmi76m18 = deco1({
  get: _getter_hra4rtdd158,
  set: _setter_lkcbe7vlvp8
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C[_symbol_7oeftbs35ho],
    set: C[_symbol_r0qefpvibl8]
  },
  isStatic: true,
  isPrivate: true,
  defineMetadata: __DefineMetadata(C, "#p")
}) || {};

_initializer_ti8cv7lo95o.set.call(
  C,
  (_result_q5mmmi76m18.initialize || (v => v))(_initializer_ti8cv7lo95o.get.call(C))
);

_getter_hra4rtdd158 = _result_q5mmmi76m18.get || _getter_hra4rtdd158;

_setter_lkcbe7vlvp8 = _result_q5mmmi76m18.set || _setter_lkcbe7vlvp8;

const _result_diqdo2k2om = deco2({
  get: _getter_hra4rtdd158,
  set: _setter_lkcbe7vlvp8
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C[_symbol_7oeftbs35ho],
    set: C[_symbol_r0qefpvibl8]
  },
  isStatic: true,
  isPrivate: true,
  defineMetadata: __DefineMetadata(C, "#p")
}) || {};

_initializer_ti8cv7lo95o.set.call(
  C,
  (_result_diqdo2k2om.initialize || (v => v))(_initializer_ti8cv7lo95o.get.call(C))
);

_getter_hra4rtdd158 = _result_diqdo2k2om.get || _getter_hra4rtdd158;

_setter_lkcbe7vlvp8 = _result_diqdo2k2om.set || _setter_lkcbe7vlvp8;

console.log(C.check);

console.assert(C.check === 40);

C.check = 3;

console.log(C.check);

console.assert(C.check === 2);