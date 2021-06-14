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

class C {
  set p(v) {}
  get p() {}
}

const _C_p_descriptor_jjjsp = Object.getOwnPropertyDescriptor(C.prototype, "p");

_C_p_descriptor_jjjsp.get = meta(3)(_C_p_descriptor_jjjsp.get, {
  kind: "getter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(C.prototype, "public", "p")
}) ?? _C_p_descriptor_jjjsp.get;

Object.defineProperty(C.prototype, "p", _C_p_descriptor_jjjsp);

const _C_p_descriptor_5pfhio = Object.getOwnPropertyDescriptor(C.prototype, "p");

_C_p_descriptor_5pfhio.get = meta(4)(_C_p_descriptor_5pfhio.get, {
  kind: "getter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(C.prototype, "public", "p")
}) ?? _C_p_descriptor_5pfhio.get;

Object.defineProperty(C.prototype, "p", _C_p_descriptor_5pfhio);

const _C_p_descriptor_ug6gf8 = Object.getOwnPropertyDescriptor(C.prototype, "p");

_C_p_descriptor_ug6gf8.set = meta(1)(_C_p_descriptor_ug6gf8.set, {
  kind: "setter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(C.prototype, "public", "p")
}) ?? _C_p_descriptor_ug6gf8.set;

Object.defineProperty(C.prototype, "p", _C_p_descriptor_ug6gf8);

const _C_p_descriptor_tsbbdo = Object.getOwnPropertyDescriptor(C.prototype, "p");

_C_p_descriptor_tsbbdo.set = meta(2)(_C_p_descriptor_tsbbdo.set, {
  kind: "setter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(C.prototype, "public", "p")
}) ?? _C_p_descriptor_tsbbdo.set;

Object.defineProperty(C.prototype, "p", _C_p_descriptor_tsbbdo);

console.assert(C.prototype[Symbol.metadata][META].public.p === 10);