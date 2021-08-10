const META = Symbol();

function meta(value) {
  return function(element, context) {
    const n = context.getMetadata(META) || 0;
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

const _C_p_symbol_rp1uh = Symbol();

const _C_p_symbol_qr901g = Symbol();

class __C_r90etg {
  _C_p_temp_o60cu(v) {}
  static [_C_p_symbol_rp1uh] = meta(1)(__C_r90etg.prototype._C_p_temp_o60cu, {
    kind: "setter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: __C_r90etg.prototype[_C_p_symbol_rp1uh]
    },
    ...__PrepareMetadata(__C_r90etg.prototype, "private", "#p")
  }) ?? __C_r90etg.prototype._C_p_temp_o60cu;
  static [_C_p_symbol_rp1uh] = meta(2)(__C_r90etg[_C_p_symbol_rp1uh], {
    kind: "setter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: __C_r90etg.prototype[_C_p_symbol_rp1uh]
    },
    ...__PrepareMetadata(__C_r90etg.prototype, "private", "#p")
  }) ?? __C_r90etg[_C_p_symbol_rp1uh];
  set #p(v) {
    return __C_r90etg[_C_p_symbol_rp1uh].bind(this)(v);
  }
  [_C_p_symbol_rp1uh]() {
    return __C_r90etg[_C_p_symbol_rp1uh].bind(this);
  }
  _C_p_temp_behfrg() {}
  static [_C_p_symbol_qr901g] = meta(3)(__C_r90etg.prototype._C_p_temp_behfrg, {
    kind: "getter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: __C_r90etg.prototype[_C_p_symbol_qr901g]
    },
    ...__PrepareMetadata(__C_r90etg.prototype, "private", "#p")
  }) ?? __C_r90etg.prototype._C_p_temp_behfrg;
  static [_C_p_symbol_qr901g] = meta(4)(__C_r90etg[_C_p_symbol_qr901g], {
    kind: "getter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: __C_r90etg.prototype[_C_p_symbol_qr901g]
    },
    ...__PrepareMetadata(__C_r90etg.prototype, "private", "#p")
  }) ?? __C_r90etg[_C_p_symbol_qr901g];
  get #p() {
    return __C_r90etg[_C_p_symbol_qr901g].bind(this)();
  }
  [_C_p_symbol_qr901g]() {
    return __C_r90etg[_C_p_symbol_qr901g].bind(this);
  }
}

delete __C_r90etg.prototype._C_p_temp_behfrg;

delete __C_r90etg.prototype._C_p_temp_o60cu;

let C = __C_r90etg;

Object.defineProperty(C, "name", {
  value: "C"
});

console.assert(C.prototype[Symbol.metadata][META].private[0] === 10);