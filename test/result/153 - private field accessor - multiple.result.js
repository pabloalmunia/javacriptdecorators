function decorator1(value, context) {
  if (context.kind === "auto-accessor") {
    return {
      initialize(v) {
        return v * 2;
      }
    };
  }
}

function decorator2(value, context) {
  if (context.kind === "auto-accessor") {
    return {
      initialize(v) {
        return v * 3;
      }
    };
  }
}

if (!Symbol.metadata) {
  Symbol.metadata = Symbol("Symbol.metadata");
}

const __metadataPrivate = new WeakMap();

function __PrepareMetadata(base, kind, property) {
  function createObjectWithPrototype(obj, key) {
    if (!Object.hasOwnProperty.call(obj, key)) {
      for (let proto = obj; proto; proto = Object.getPrototypeOf(proto)) {
        if (Object.hasOwnProperty.call(proto, key)) {
          return obj[key] = Object.create(proto[key]);
        }
      }
      obj[key] = Object.create(null);
    }
  }
  return {
    getMetadata(key) {
      if (base[Symbol.metadata] && base[Symbol.metadata][key] && typeof base[Symbol.metadata][key][kind] !== "undefined") {
        return kind === "public" ? base[Symbol.metadata][key].public[property] : base[Symbol.metadata][key][kind];
      }
    },
    setMetadata(key, value) {
      if (typeof key !== "symbol") {
        throw new TypeError("the key must be a Symbol");
      }
      createObjectWithPrototype(base, Symbol.metadata);
      createObjectWithPrototype(base[Symbol.metadata], key);
      createObjectWithPrototype(base[Symbol.metadata][key], "public");
      if (!Object.hasOwnProperty.call(base[Symbol.metadata][key], "private")) {
        Object.defineProperty(base[Symbol.metadata][key], "private", {
          get() {
            return (__metadataPrivate.get(base[Symbol.metadata][key]) || []).concat(Object.getPrototypeOf(base[Symbol.metadata][key])?.private || []);
          }
        });
      }
      if (kind === "public") {
        base[Symbol.metadata][key].public[property] = value;
      } else if (kind === "private") {
        if (!__metadataPrivate.has(base[Symbol.metadata][key])) {
          __metadataPrivate.set(base[Symbol.metadata][key], []);
        }
        __metadataPrivate.get(base[Symbol.metadata][key]).push(value);
      } else if (kind === "constructor") {
        base[Symbol.metadata][key].constructor = value;
      }
    }
  };
}

const _C_p_get_symbol_aa0bc = Symbol();

const _C_p_set_symbol_571f7o = Symbol();

let _C_p_getter_6gngdo;

let _C_p_setter_ej05io;

let _C_p_initializer_tssgv8;

let _C_p_initializer_ipalog;

class C {
  #_p_private_property_jqrtao = _C_p_initializer_ipalog.call(this, _C_p_initializer_tssgv8.call(this, 1));
  get #p() {
    return _C_p_getter_6gngdo.call(this);
  }
  set #p(v) {
    return _C_p_setter_ej05io.call(this, v);
  }
  static _C_p_getter_6gngdo() {
    return this.#_p_private_property_jqrtao;
  }
  static _C_p_setter_ej05io(v) {
    this.#_p_private_property_jqrtao = v;
  }
  [_C_p_get_symbol_aa0bc]() {
    return this.#p;
  }
  [_C_p_set_symbol_571f7o](v) {
    this.#p = v;
  }
  get check() {
    return this.#p;
  }
}

_C_p_getter_6gngdo = C._C_p_getter_6gngdo;

_C_p_setter_ej05io = C._C_p_setter_ej05io;

delete C._C_p_getter_6gngdo;

delete C._C_p_setter_ej05io;

const _C_p_result_h5dshg = decorator1({
  get: _C_p_getter_6gngdo,
  set: _C_p_setter_ej05io
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C.prototype[_C_p_get_symbol_aa0bc],
    set: C.prototype[_C_p_set_symbol_571f7o]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", undefined)
}) || {};

_C_p_initializer_ipalog = _C_p_result_h5dshg.initialize || (v => v);

_C_p_getter_6gngdo = _C_p_result_h5dshg.get || _C_p_getter_6gngdo;

_C_p_setter_ej05io = _C_p_result_h5dshg.set || _C_p_setter_ej05io;

const _C_p_result_i126lo = decorator2({
  get: _C_p_getter_6gngdo,
  set: _C_p_setter_ej05io
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C.prototype[_C_p_get_symbol_aa0bc],
    set: C.prototype[_C_p_set_symbol_571f7o]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", undefined)
}) || {};

_C_p_initializer_tssgv8 = _C_p_result_i126lo.initialize || (v => v);

_C_p_getter_6gngdo = _C_p_result_i126lo.get || _C_p_getter_6gngdo;

_C_p_setter_ej05io = _C_p_result_i126lo.set || _C_p_setter_ej05io;

const c = new C();

console.assert(c.check === 6);