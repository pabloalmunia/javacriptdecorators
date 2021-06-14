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
  const createObjectWithPrototype = (obj, key) => Object.hasOwnProperty.call(obj, key) ? obj[key] : Object.create(obj[key] || null);
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

const _C_f_get_symbol_cnbmi8 = Symbol();

const _C_f_set_symbol_0se1e8 = Symbol();

let _C_f_initializer_dkvnag;

let _C_f_initializer_el4ug;

const _C_p_get_symbol_bofom = Symbol();

const _C_p_set_symbol_9ka69 = Symbol();

let _C_p_initializer_i379e;

let _C_p_initializer_gsnpdo;

class C {
  #p = _C_p_initializer_gsnpdo.call(this, _C_p_initializer_i379e.call(this, 10));
  [_C_p_get_symbol_bofom]() {
    return this.#p;
  }
  [_C_p_set_symbol_9ka69](v) {
    this.#p = v;
  }
  #f = _C_f_initializer_el4ug.call(this, _C_f_initializer_dkvnag.call(this, 20));
  [_C_f_get_symbol_cnbmi8]() {
    return this.#f;
  }
  [_C_f_set_symbol_0se1e8](v) {
    this.#f = v;
  }
}

_C_p_initializer_gsnpdo = meta(1)(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: C.prototype[_C_p_get_symbol_bofom],
    set: C.prototype[_C_p_set_symbol_9ka69]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", undefined)
}) ?? (v => v);

_C_p_initializer_i379e = meta(2)(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: C.prototype[_C_p_get_symbol_bofom],
    set: C.prototype[_C_p_set_symbol_9ka69]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", undefined)
}) ?? (v => v);

_C_f_initializer_el4ug = meta(3)(undefined, {
  kind: "field",
  name: "#f",
  access: {
    get: C.prototype[_C_f_get_symbol_cnbmi8],
    set: C.prototype[_C_f_set_symbol_0se1e8]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", undefined)
}) ?? (v => v);

_C_f_initializer_dkvnag = meta(3)(undefined, {
  kind: "field",
  name: "#f",
  access: {
    get: C.prototype[_C_f_get_symbol_cnbmi8],
    set: C.prototype[_C_f_set_symbol_0se1e8]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", undefined)
}) ?? (v => v);

console.assert(C.prototype[Symbol.metadata][META].private[0] === 1);

console.assert(C.prototype[Symbol.metadata][META].private[1] === 3);

console.assert(C.prototype[Symbol.metadata][META].private[2] === 6);

console.assert(C.prototype[Symbol.metadata][META].private[3] === 9);