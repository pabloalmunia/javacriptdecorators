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

const _C_f_get_symbol_hu6f4o = Symbol();

const _C_f_set_symbol_3k728o = Symbol();

let _C_f_initializer_6a6c4o;

let _C_f_initializer_6kemu;

const _C_p_get_symbol_m40plo = Symbol();

const _C_p_set_symbol_e4iqmo = Symbol();

let _C_p_initializer_491cqg;

let _C_p_initializer_5vqdg;

class C {
  #p = _C_p_initializer_5vqdg.call(this, _C_p_initializer_491cqg.call(this, 10));
  [_C_p_get_symbol_m40plo]() {
    return this.#p;
  }
  [_C_p_set_symbol_e4iqmo](v) {
    this.#p = v;
  }
  #f = _C_f_initializer_6kemu.call(this, _C_f_initializer_6a6c4o.call(this, 20));
  [_C_f_get_symbol_hu6f4o]() {
    return this.#f;
  }
  [_C_f_set_symbol_3k728o](v) {
    this.#f = v;
  }
}

_C_p_initializer_5vqdg = meta(1)(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: C.prototype[_C_p_get_symbol_m40plo],
    set: C.prototype[_C_p_set_symbol_e4iqmo]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", undefined)
}) ?? (v => v);

_C_p_initializer_491cqg = meta(2)(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: C.prototype[_C_p_get_symbol_m40plo],
    set: C.prototype[_C_p_set_symbol_e4iqmo]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", undefined)
}) ?? (v => v);

_C_f_initializer_6kemu = meta(3)(undefined, {
  kind: "field",
  name: "#f",
  access: {
    get: C.prototype[_C_f_get_symbol_hu6f4o],
    set: C.prototype[_C_f_set_symbol_3k728o]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", undefined)
}) ?? (v => v);

_C_f_initializer_6a6c4o = meta(3)(undefined, {
  kind: "field",
  name: "#f",
  access: {
    get: C.prototype[_C_f_get_symbol_hu6f4o],
    set: C.prototype[_C_f_set_symbol_3k728o]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", undefined)
}) ?? (v => v);

console.assert(C.prototype[Symbol.metadata][META].private[0] === 1);

console.assert(C.prototype[Symbol.metadata][META].private[1] === 3);

console.assert(C.prototype[Symbol.metadata][META].private[2] === 6);

console.assert(C.prototype[Symbol.metadata][META].private[3] === 9);