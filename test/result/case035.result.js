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

const _C_p_descriptor_d79ec8 = Object.getOwnPropertyDescriptor(C.prototype, "p");

_C_p_descriptor_d79ec8.get = meta(3)(_C_p_descriptor_d79ec8.get, {
  kind: "getter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(C.prototype, "public", "p")
}) ?? _C_p_descriptor_d79ec8.get;

Object.defineProperty(C.prototype, "p", _C_p_descriptor_d79ec8);

const _C_p_descriptor_dc4l1 = Object.getOwnPropertyDescriptor(C.prototype, "p");

_C_p_descriptor_dc4l1.get = meta(4)(_C_p_descriptor_dc4l1.get, {
  kind: "getter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(C.prototype, "public", "p")
}) ?? _C_p_descriptor_dc4l1.get;

Object.defineProperty(C.prototype, "p", _C_p_descriptor_dc4l1);

const _C_p_descriptor_lfj35o = Object.getOwnPropertyDescriptor(C.prototype, "p");

_C_p_descriptor_lfj35o.set = meta(1)(_C_p_descriptor_lfj35o.set, {
  kind: "setter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(C.prototype, "public", "p")
}) ?? _C_p_descriptor_lfj35o.set;

Object.defineProperty(C.prototype, "p", _C_p_descriptor_lfj35o);

const _C_p_descriptor_k2l2po = Object.getOwnPropertyDescriptor(C.prototype, "p");

_C_p_descriptor_k2l2po.set = meta(2)(_C_p_descriptor_k2l2po.set, {
  kind: "setter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(C.prototype, "public", "p")
}) ?? _C_p_descriptor_k2l2po.set;

Object.defineProperty(C.prototype, "p", _C_p_descriptor_k2l2po);

console.assert(C.prototype[Symbol.metadata][META].public.p === 10);