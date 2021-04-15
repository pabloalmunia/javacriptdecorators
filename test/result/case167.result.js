function deco(value, context) {
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

const _symbol_odh4b9hp3q8 = Symbol();

const _symbol_igjchavnoa = Symbol();

let _getter_hit4bbm64v8;

let _setter_e14tspgo2bo;

class C {
  static #_property_pvvr6cbm5do = 10;
  static get #p() {
    return _getter_hit4bbm64v8.call(this);
  }
  static set #p(v) {
    return _setter_e14tspgo2bo.call(this, v);
  }
  static _getter_hit4bbm64v8() {
    return this.#_property_pvvr6cbm5do;
  }
  static _setter_e14tspgo2bo(v) {
    this.#_property_pvvr6cbm5do = v;
  }
  static [_symbol_odh4b9hp3q8]() {
    return C.#p;
  }
  static [_symbol_igjchavnoa](v) {
    C.#p = v;
  }
  static get check() {
    return C.#p;
  }
  static set check(v) {
    C.#p = v;
  }
}

const _initializer_49gavf96igg = {
  get: C._getter_hit4bbm64v8,
  set: C._setter_e14tspgo2bo
};

_getter_hit4bbm64v8 = C._getter_hit4bbm64v8;

_setter_e14tspgo2bo = C._setter_e14tspgo2bo;

delete C._getter_hit4bbm64v8;

delete C._setter_e14tspgo2bo;

const _result_e2c2n6ubp9 = deco({
  get: _getter_hit4bbm64v8,
  set: _setter_e14tspgo2bo
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C[_symbol_odh4b9hp3q8],
    set: C[_symbol_igjchavnoa]
  },
  isStatic: true,
  isPrivate: true,
  defineMetadata: __DefineMetadata(C, "#p")
}) || {};

_initializer_49gavf96igg.set.call(
  C,
  (_result_e2c2n6ubp9.initialize || (v => v))(_initializer_49gavf96igg.get.call(C))
);

_getter_hit4bbm64v8 = _result_e2c2n6ubp9.get || _getter_hit4bbm64v8;

_setter_e14tspgo2bo = _result_e2c2n6ubp9.set || _setter_e14tspgo2bo;

console.assert(C.check === 40);

C.check = 3;

console.assert(C.check === 2);