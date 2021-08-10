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

class __C_6m8ndg {
  static p = 10;
  static f = 20;
}

let C = __C_6m8ndg;

Object.defineProperty(C, "name", {
  value: "C"
});

const _C_f_initializer_5adjp8 = meta(3)(undefined, {
  kind: "field",
  name: "f",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(__C_6m8ndg, "public", "f")
}) ?? (v => v);

__C_6m8ndg.f = _C_f_initializer_5adjp8.call(__C_6m8ndg, __C_6m8ndg.f);

const _C_f_initializer_3q0o18 = meta(3)(undefined, {
  kind: "field",
  name: "f",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(__C_6m8ndg, "public", "f")
}) ?? (v => v);

__C_6m8ndg.f = _C_f_initializer_3q0o18.call(__C_6m8ndg, __C_6m8ndg.f);

const _C_p_initializer_trcsv8 = meta(2)(undefined, {
  kind: "field",
  name: "p",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(__C_6m8ndg, "public", "p")
}) ?? (v => v);

__C_6m8ndg.p = _C_p_initializer_trcsv8.call(__C_6m8ndg, __C_6m8ndg.p);

const _C_p_initializer_21j1oo = meta(1)(undefined, {
  kind: "field",
  name: "p",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(__C_6m8ndg, "public", "p")
}) ?? (v => v);

__C_6m8ndg.p = _C_p_initializer_21j1oo.call(__C_6m8ndg, __C_6m8ndg.p);

console.assert(C[Symbol.metadata][META].public.p === 3);

console.assert(C[Symbol.metadata][META].public.f === 6);