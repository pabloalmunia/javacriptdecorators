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

class __C_pl5bro {
  set p(v) {}
  get p() {}
}

const _C_p_descriptor_iqk6b8 = Object.getOwnPropertyDescriptor(__C_pl5bro.prototype, "p");

_C_p_descriptor_iqk6b8.get = meta(3)(_C_p_descriptor_iqk6b8.get, {
  kind: "getter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(__C_pl5bro.prototype, "public", "p")
}) ?? _C_p_descriptor_iqk6b8.get;

Object.defineProperty(__C_pl5bro.prototype, "p", _C_p_descriptor_iqk6b8);

const _C_p_descriptor_h9rvrg = Object.getOwnPropertyDescriptor(__C_pl5bro.prototype, "p");

_C_p_descriptor_h9rvrg.get = meta(4)(_C_p_descriptor_h9rvrg.get, {
  kind: "getter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(__C_pl5bro.prototype, "public", "p")
}) ?? _C_p_descriptor_h9rvrg.get;

Object.defineProperty(__C_pl5bro.prototype, "p", _C_p_descriptor_h9rvrg);

const _C_p_descriptor_r2uicg = Object.getOwnPropertyDescriptor(__C_pl5bro.prototype, "p");

_C_p_descriptor_r2uicg.set = meta(1)(_C_p_descriptor_r2uicg.set, {
  kind: "setter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(__C_pl5bro.prototype, "public", "p")
}) ?? _C_p_descriptor_r2uicg.set;

Object.defineProperty(__C_pl5bro.prototype, "p", _C_p_descriptor_r2uicg);

const _C_p_descriptor_iok438 = Object.getOwnPropertyDescriptor(__C_pl5bro.prototype, "p");

_C_p_descriptor_iok438.set = meta(2)(_C_p_descriptor_iok438.set, {
  kind: "setter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(__C_pl5bro.prototype, "public", "p")
}) ?? _C_p_descriptor_iok438.set;

Object.defineProperty(__C_pl5bro.prototype, "p", _C_p_descriptor_iok438);

let C = __C_pl5bro;

Object.defineProperty(C, "name", {
  value: "C"
});

console.assert(C.prototype[Symbol.metadata][META].public.p === 10);