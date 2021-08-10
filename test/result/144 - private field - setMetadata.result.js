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

const _C_p_get_symbol_13khp = Symbol();

const _C_p_set_symbol_2rc6sg = Symbol();

let _C_p_initializer_0da338;

let _C_p_initializer_claiao;

let _C_p_initializer_90quvg;

class __C_3r895o {
  #p = _C_p_initializer_90quvg.call(
    this,
    _C_p_initializer_claiao.call(this, _C_p_initializer_0da338.call(this, 10))
  );
  [_C_p_get_symbol_13khp]() {
    return this.#p;
  }
  [_C_p_set_symbol_2rc6sg](v) {
    this.#p = v;
  }
}

_C_p_initializer_90quvg = decorator1(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: __C_3r895o.prototype[_C_p_get_symbol_13khp],
    set: __C_3r895o.prototype[_C_p_set_symbol_2rc6sg]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(__C_3r895o.prototype, "private", "p")
}) ?? (v => v);

_C_p_initializer_claiao = decorator2(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: __C_3r895o.prototype[_C_p_get_symbol_13khp],
    set: __C_3r895o.prototype[_C_p_set_symbol_2rc6sg]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(__C_3r895o.prototype, "private", "p")
}) ?? (v => v);

_C_p_initializer_0da338 = decorator2(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: __C_3r895o.prototype[_C_p_get_symbol_13khp],
    set: __C_3r895o.prototype[_C_p_set_symbol_2rc6sg]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(__C_3r895o.prototype, "private", "p")
}) ?? (v => v);

let C = __C_3r895o;

Object.defineProperty(C, "name", {
  value: "C"
});

const c = new C();

console.assert(C.prototype[Symbol.metadata][ONE].private[0] === 1);

console.assert(C.prototype[Symbol.metadata][TWO].private[0] === 2);

console.assert(C.prototype[Symbol.metadata][TWO].private.length === 1);

console.assert(C.prototype[Symbol.metadata][TWO].private[1] === undefined);