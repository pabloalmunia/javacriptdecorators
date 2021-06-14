const ONE = Symbol();

const TWO = Symbol();

function decorator1(value, context) {
  context.setMetadata(ONE, 1);
}

function decorator2(value, context) {
  context.setMetadata(TWO, 2);
}

if (!Symbol.metadata) {
  Symbol.metadata = Symbol("Symbol.metadata");
}

const __metadataPrivate = new WeakMap();

function __PrepareMetadata(base, kind, property) {
  function createObjectWithPrototype(obj, key) {
    if (!Object.hasOwnProperty.call(obj, key)) {
      obj[key] = Object.create(obj[key] || null);
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

const _C_p_get_symbol_rp8thg = Symbol();

const _C_p_set_symbol_0no9h8 = Symbol();

let _C_p_getter_2oioq;

let _C_p_setter_n3epqg;

class C {
  static #_p_private_property_d64neg = 10;
  static get #p() {
    return _C_p_getter_2oioq.call(this);
  }
  static set #p(v) {
    return _C_p_setter_n3epqg.call(this, v);
  }
  static _C_p_getter_2oioq() {
    return this.#_p_private_property_d64neg;
  }
  static _C_p_setter_n3epqg(v) {
    this.#_p_private_property_d64neg = v;
  }
  static [_C_p_get_symbol_rp8thg]() {
    return C.#p;
  }
  static [_C_p_set_symbol_0no9h8](v) {
    C.#p = v;
  }
}

const _C_p_initializer_pvvg48 = {
  get: C._C_p_getter_2oioq,
  set: C._C_p_setter_n3epqg
};

_C_p_getter_2oioq = C._C_p_getter_2oioq;

_C_p_setter_n3epqg = C._C_p_setter_n3epqg;

delete C._C_p_getter_2oioq;

delete C._C_p_setter_n3epqg;

const _C_p_result_m5cndo = decorator1({
  get: _C_p_getter_2oioq,
  set: _C_p_setter_n3epqg
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C[_C_p_get_symbol_rp8thg],
    set: C[_C_p_set_symbol_0no9h8]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(C, "private", undefined)
}) || {};

_C_p_initializer_pvvg48.set.call(
  C,
  (_C_p_result_m5cndo.initialize || (v => v))(_C_p_initializer_pvvg48.get.call(C))
);

_C_p_getter_2oioq = _C_p_result_m5cndo.get || _C_p_getter_2oioq;

_C_p_setter_n3epqg = _C_p_result_m5cndo.set || _C_p_setter_n3epqg;

const _C_p_result_qb3a5o = decorator2({
  get: _C_p_getter_2oioq,
  set: _C_p_setter_n3epqg
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C[_C_p_get_symbol_rp8thg],
    set: C[_C_p_set_symbol_0no9h8]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(C, "private", undefined)
}) || {};

_C_p_initializer_pvvg48.set.call(
  C,
  (_C_p_result_qb3a5o.initialize || (v => v))(_C_p_initializer_pvvg48.get.call(C))
);

_C_p_getter_2oioq = _C_p_result_qb3a5o.get || _C_p_getter_2oioq;

_C_p_setter_n3epqg = _C_p_result_qb3a5o.set || _C_p_setter_n3epqg;

console.assert(C[Symbol.metadata][ONE].private[0] === 1);

console.assert(C[Symbol.metadata][TWO].private[0] === 2);