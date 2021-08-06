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
  const createObjectWithPrototype = (obj, key) => Object.hasOwnProperty.call(obj, key) ? obj[key] : Object.create(obj[key] || {});
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
      base[Symbol.metadata] = createObjectWithPrototype(base, Symbol.metadata);
      base[Symbol.metadata][key] = createObjectWithPrototype(base[Symbol.metadata], key);
      base[Symbol.metadata][key].public = createObjectWithPrototype(base[Symbol.metadata][key], "public");
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

const _C_p_get_symbol_qlighg = Symbol();

const _C_p_set_symbol_am1eeg = Symbol();

let _C_p_getter_bmkqr8;

let _C_p_setter_6nc4hg;

class C {
  static #_p_private_property_bf2n3o = 10;
  static get #p() {
    return _C_p_getter_bmkqr8.call(this);
  }
  static set #p(v) {
    return _C_p_setter_6nc4hg.call(this, v);
  }
  static _C_p_getter_bmkqr8() {
    return this.#_p_private_property_bf2n3o;
  }
  static _C_p_setter_6nc4hg(v) {
    this.#_p_private_property_bf2n3o = v;
  }
  static [_C_p_get_symbol_qlighg]() {
    return C.#p;
  }
  static [_C_p_set_symbol_am1eeg](v) {
    C.#p = v;
  }
}

const _C_p_initializer_j45e08 = {
  get: C._C_p_getter_bmkqr8,
  set: C._C_p_setter_6nc4hg
};

_C_p_getter_bmkqr8 = C._C_p_getter_bmkqr8;

_C_p_setter_6nc4hg = C._C_p_setter_6nc4hg;

delete C._C_p_getter_bmkqr8;

delete C._C_p_setter_6nc4hg;

const _C_p_result_r1iqo8 = decorator1({
  get: _C_p_getter_bmkqr8,
  set: _C_p_setter_6nc4hg
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C[_C_p_get_symbol_qlighg],
    set: C[_C_p_set_symbol_am1eeg]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(C, "private", undefined)
}) || {};

_C_p_initializer_j45e08.set.call(
  C,
  (_C_p_result_r1iqo8.initialize || (v => v))(_C_p_initializer_j45e08.get.call(C))
);

_C_p_getter_bmkqr8 = _C_p_result_r1iqo8.get || _C_p_getter_bmkqr8;

_C_p_setter_6nc4hg = _C_p_result_r1iqo8.set || _C_p_setter_6nc4hg;

const _C_p_result_tvguu8 = decorator2({
  get: _C_p_getter_bmkqr8,
  set: _C_p_setter_6nc4hg
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C[_C_p_get_symbol_qlighg],
    set: C[_C_p_set_symbol_am1eeg]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(C, "private", undefined)
}) || {};

_C_p_initializer_j45e08.set.call(
  C,
  (_C_p_result_tvguu8.initialize || (v => v))(_C_p_initializer_j45e08.get.call(C))
);

_C_p_getter_bmkqr8 = _C_p_result_tvguu8.get || _C_p_getter_bmkqr8;

_C_p_setter_6nc4hg = _C_p_result_tvguu8.set || _C_p_setter_6nc4hg;

console.assert(C[Symbol.metadata][ONE].private[0] === 1);

console.assert(C[Symbol.metadata][TWO].private[0] === 2);