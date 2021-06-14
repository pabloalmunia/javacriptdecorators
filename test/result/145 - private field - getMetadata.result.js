const META = Symbol();

function meta(value) {
  return function(element, context) {
    const a = context.getMetadata(META) || [0];
    context.setMetadata(META, a[a.length - 1] + value);
  };
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

const _C_f_get_symbol_feocc8 = Symbol();

const _C_f_set_symbol_kkov7o = Symbol();

let _C_f_initializer_es8eko;

let _C_f_initializer_0kkoi;

const _C_p_get_symbol_rd74ng = Symbol();

const _C_p_set_symbol_qmanv8 = Symbol();

let _C_p_initializer_11r0g8;

let _C_p_initializer_c9q2sg;

class C {
  #p = _C_p_initializer_c9q2sg.call(this, _C_p_initializer_11r0g8.call(this, 10));
  [_C_p_get_symbol_rd74ng]() {
    return this.#p;
  }
  [_C_p_set_symbol_qmanv8](v) {
    this.#p = v;
  }
  #f = _C_f_initializer_0kkoi.call(this, _C_f_initializer_es8eko.call(this, 20));
  [_C_f_get_symbol_feocc8]() {
    return this.#f;
  }
  [_C_f_set_symbol_kkov7o](v) {
    this.#f = v;
  }
}

_C_p_initializer_c9q2sg = meta(1)(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: C.prototype[_C_p_get_symbol_rd74ng],
    set: C.prototype[_C_p_set_symbol_qmanv8]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", undefined)
}) ?? (v => v);

_C_p_initializer_11r0g8 = meta(2)(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: C.prototype[_C_p_get_symbol_rd74ng],
    set: C.prototype[_C_p_set_symbol_qmanv8]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", undefined)
}) ?? (v => v);

_C_f_initializer_0kkoi = meta(3)(undefined, {
  kind: "field",
  name: "#f",
  access: {
    get: C.prototype[_C_f_get_symbol_feocc8],
    set: C.prototype[_C_f_set_symbol_kkov7o]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", undefined)
}) ?? (v => v);

_C_f_initializer_es8eko = meta(3)(undefined, {
  kind: "field",
  name: "#f",
  access: {
    get: C.prototype[_C_f_get_symbol_feocc8],
    set: C.prototype[_C_f_set_symbol_kkov7o]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", undefined)
}) ?? (v => v);

console.assert(C.prototype[Symbol.metadata][META].private[0] === 1);

console.assert(C.prototype[Symbol.metadata][META].private[1] === 3);

console.assert(C.prototype[Symbol.metadata][META].private[2] === 6);

console.assert(C.prototype[Symbol.metadata][META].private[3] === 9);