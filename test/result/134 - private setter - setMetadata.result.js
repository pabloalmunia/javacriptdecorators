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

const _C_p_symbol_3app8o = Symbol();

class __C_550afg {
  _C_p_temp_9jepko(v) {}
  static [_C_p_symbol_3app8o] = decorator1(__C_550afg.prototype._C_p_temp_9jepko, {
    kind: "setter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: __C_550afg.prototype[_C_p_symbol_3app8o]
    },
    ...__PrepareMetadata(__C_550afg.prototype, "private", "#p")
  }) ?? __C_550afg.prototype._C_p_temp_9jepko;
  static [_C_p_symbol_3app8o] = decorator2(__C_550afg[_C_p_symbol_3app8o], {
    kind: "setter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: __C_550afg.prototype[_C_p_symbol_3app8o]
    },
    ...__PrepareMetadata(__C_550afg.prototype, "private", "#p")
  }) ?? __C_550afg[_C_p_symbol_3app8o];
  static [_C_p_symbol_3app8o] = decorator2(__C_550afg[_C_p_symbol_3app8o], {
    kind: "setter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: __C_550afg.prototype[_C_p_symbol_3app8o]
    },
    ...__PrepareMetadata(__C_550afg.prototype, "private", "#p")
  }) ?? __C_550afg[_C_p_symbol_3app8o];
  set #p(v) {
    return __C_550afg[_C_p_symbol_3app8o].bind(this)(v);
  }
  [_C_p_symbol_3app8o]() {
    return __C_550afg[_C_p_symbol_3app8o].bind(this);
  }
}

delete __C_550afg.prototype._C_p_temp_9jepko;

let C = __C_550afg;

Object.defineProperty(C, "name", {
  value: "C"
});

const a = new C();

console.assert(C.prototype[Symbol.metadata][ONE].private[0] === 1);

console.assert(C.prototype[Symbol.metadata][TWO].private[0] === 2);

console.assert(C.prototype[Symbol.metadata][TWO].private.length === 1);