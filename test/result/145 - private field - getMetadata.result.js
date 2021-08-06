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

const _C_f_get_symbol_i2rago = Symbol();

const _C_f_set_symbol_biut68 = Symbol();

let _C_f_initializer_rk9vjg;

let _C_f_initializer_aua68g;

const _C_p_get_symbol_vfmen8 = Symbol();

const _C_p_set_symbol_48b768 = Symbol();

let _C_p_initializer_2dcjt;

let _C_p_initializer_0kfhro;

class C {
  #p = _C_p_initializer_0kfhro.call(this, _C_p_initializer_2dcjt.call(this, 10));
  [_C_p_get_symbol_vfmen8]() {
    return this.#p;
  }
  [_C_p_set_symbol_48b768](v) {
    this.#p = v;
  }
  #f = _C_f_initializer_aua68g.call(this, _C_f_initializer_rk9vjg.call(this, 20));
  [_C_f_get_symbol_i2rago]() {
    return this.#f;
  }
  [_C_f_set_symbol_biut68](v) {
    this.#f = v;
  }
}

_C_p_initializer_0kfhro = meta(1)(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: C.prototype[_C_p_get_symbol_vfmen8],
    set: C.prototype[_C_p_set_symbol_48b768]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", undefined)
}) ?? (v => v);

_C_p_initializer_2dcjt = meta(2)(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: C.prototype[_C_p_get_symbol_vfmen8],
    set: C.prototype[_C_p_set_symbol_48b768]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", undefined)
}) ?? (v => v);

_C_f_initializer_aua68g = meta(3)(undefined, {
  kind: "field",
  name: "#f",
  access: {
    get: C.prototype[_C_f_get_symbol_i2rago],
    set: C.prototype[_C_f_set_symbol_biut68]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", undefined)
}) ?? (v => v);

_C_f_initializer_rk9vjg = meta(3)(undefined, {
  kind: "field",
  name: "#f",
  access: {
    get: C.prototype[_C_f_get_symbol_i2rago],
    set: C.prototype[_C_f_set_symbol_biut68]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", undefined)
}) ?? (v => v);

console.assert(C.prototype[Symbol.metadata][META].private[0] === 1);

console.assert(C.prototype[Symbol.metadata][META].private[1] === 3);

console.assert(C.prototype[Symbol.metadata][META].private[2] === 6);

console.assert(C.prototype[Symbol.metadata][META].private[3] === 9);