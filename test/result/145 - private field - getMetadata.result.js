const META = Symbol();

function meta(value) {
  return function(element, context) {
    const n = context.getMetadata(META) || 0;
    console.log(n);
    context.setMetadata(META, n + value);
  };
}

if (!Symbol.metadata) {
  Symbol.metadata = Symbol("Symbol.metadata");
}

const __metadataPrivate = new WeakMap();

function __PrepareMetadata(base, kind, property) {
  const createObjectWithPrototype = (obj, key) => Object.hasOwnProperty.call(obj, key) ? obj[key] : Object.create(obj[key] || Object.prototype);
  return {
    getMetadata(key) {
      if (base[Symbol.metadata] && base[Symbol.metadata][key] && typeof base[Symbol.metadata][key][kind] !== "undefined") {
        return kind === "public" ? base[Symbol.metadata][key].public[property] : kind === "private" ? __metadataPrivate.has(base[Symbol.metadata][key]) ? __metadataPrivate.get(base[Symbol.metadata][key])[property] : undefined : base[Symbol.metadata][key][kind];
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
            return Object.values(__metadataPrivate.get(base[Symbol.metadata][key]) || {}).concat(Object.getPrototypeOf(base[Symbol.metadata][key])?.private || []);
          }
        });
      }
      if (kind === "public") {
        base[Symbol.metadata][key].public[property] = value;
      } else if (kind === "private") {
        if (!__metadataPrivate.has(base[Symbol.metadata][key])) {
          __metadataPrivate.set(base[Symbol.metadata][key], {});
        }
        __metadataPrivate.get(base[Symbol.metadata][key])[property] = value;
      } else if (kind === "constructor") {
        base[Symbol.metadata][key].constructor = value;
      }
    }
  };
}

const _C_f_get_symbol_gconug = Symbol();

const _C_f_set_symbol_9smgn = Symbol();

let _C_f_initializer_hh2ci8;

let _C_f_initializer_f7orq8;

const _C_p_get_symbol_vdmvvo = Symbol();

const _C_p_set_symbol_u3l24o = Symbol();

let _C_p_initializer_6a588o;

let _C_p_initializer_ihr1v;

class C {
  #p = _C_p_initializer_ihr1v.call(this, _C_p_initializer_6a588o.call(this, 10));
  [_C_p_get_symbol_vdmvvo]() {
    return this.#p;
  }
  [_C_p_set_symbol_u3l24o](v) {
    this.#p = v;
  }
  #f = _C_f_initializer_f7orq8.call(this, _C_f_initializer_hh2ci8.call(this, 20));
  [_C_f_get_symbol_gconug]() {
    return this.#f;
  }
  [_C_f_set_symbol_9smgn](v) {
    this.#f = v;
  }
}

_C_p_initializer_ihr1v = meta(1)(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: C.prototype[_C_p_get_symbol_vdmvvo],
    set: C.prototype[_C_p_set_symbol_u3l24o]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", "p")
}) ?? (v => v);

_C_p_initializer_6a588o = meta(2)(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: C.prototype[_C_p_get_symbol_vdmvvo],
    set: C.prototype[_C_p_set_symbol_u3l24o]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", "p")
}) ?? (v => v);

_C_f_initializer_f7orq8 = meta(3)(undefined, {
  kind: "field",
  name: "#f",
  access: {
    get: C.prototype[_C_f_get_symbol_gconug],
    set: C.prototype[_C_f_set_symbol_9smgn]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", "f")
}) ?? (v => v);

_C_f_initializer_hh2ci8 = meta(3)(undefined, {
  kind: "field",
  name: "#f",
  access: {
    get: C.prototype[_C_f_get_symbol_gconug],
    set: C.prototype[_C_f_set_symbol_9smgn]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", "f")
}) ?? (v => v);

console.log(C.prototype[Symbol.metadata][META].private);

console.assert(C.prototype[Symbol.metadata][META].private[0] === 3);

console.assert(C.prototype[Symbol.metadata][META].private[1] === 6);