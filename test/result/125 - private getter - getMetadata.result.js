const META = Symbol();

function meta(value) {
  return function(element, context) {
    const n = context.getMetadata(META) || [0];
    context.setMetadata(META, n[n.length - 1] + value);
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

const _C_p_symbol_vmjpu8 = Symbol();

class C {
  _C_p_temp_vierfo() {
    return "a";
  }
  static [_C_p_symbol_vmjpu8] = meta(1)(C.prototype._C_p_temp_vierfo, {
    kind: "getter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C.prototype[_C_p_symbol_vmjpu8]
    },
    ...__PrepareMetadata(C.prototype, "private", undefined)
  }) ?? C.prototype._C_p_temp_vierfo;
  static [_C_p_symbol_vmjpu8] = meta(2)(C[_C_p_symbol_vmjpu8], {
    kind: "getter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C.prototype[_C_p_symbol_vmjpu8]
    },
    ...__PrepareMetadata(C.prototype, "private", undefined)
  }) ?? C[_C_p_symbol_vmjpu8];
  get #p() {
    return C[_C_p_symbol_vmjpu8].bind(this)();
  }
  [_C_p_symbol_vmjpu8]() {
    return C[_C_p_symbol_vmjpu8].bind(this);
  }
}

delete C.prototype._C_p_temp_vierfo;

console.assert(C.prototype[Symbol.metadata][META].private[0] === 1);

console.assert(C.prototype[Symbol.metadata][META].private[1] === 3);