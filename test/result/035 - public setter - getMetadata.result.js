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

class C {
  set p(v) {}
  get p() {}
}

const _C_p_descriptor_192b2g = Object.getOwnPropertyDescriptor(C.prototype, "p");

_C_p_descriptor_192b2g.get = meta(3)(_C_p_descriptor_192b2g.get, {
  kind: "getter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(C.prototype, "public", "p")
}) ?? _C_p_descriptor_192b2g.get;

Object.defineProperty(C.prototype, "p", _C_p_descriptor_192b2g);

const _C_p_descriptor_hh6dco = Object.getOwnPropertyDescriptor(C.prototype, "p");

_C_p_descriptor_hh6dco.get = meta(4)(_C_p_descriptor_hh6dco.get, {
  kind: "getter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(C.prototype, "public", "p")
}) ?? _C_p_descriptor_hh6dco.get;

Object.defineProperty(C.prototype, "p", _C_p_descriptor_hh6dco);

const _C_p_descriptor_o52s78 = Object.getOwnPropertyDescriptor(C.prototype, "p");

_C_p_descriptor_o52s78.set = meta(1)(_C_p_descriptor_o52s78.set, {
  kind: "setter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(C.prototype, "public", "p")
}) ?? _C_p_descriptor_o52s78.set;

Object.defineProperty(C.prototype, "p", _C_p_descriptor_o52s78);

const _C_p_descriptor_iohmp = Object.getOwnPropertyDescriptor(C.prototype, "p");

_C_p_descriptor_iohmp.set = meta(2)(_C_p_descriptor_iohmp.set, {
  kind: "setter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(C.prototype, "public", "p")
}) ?? _C_p_descriptor_iohmp.set;

Object.defineProperty(C.prototype, "p", _C_p_descriptor_iohmp);

console.assert(C.prototype[Symbol.metadata][META].public.p === 10);