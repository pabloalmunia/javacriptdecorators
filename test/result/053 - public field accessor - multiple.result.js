function decorator1(value, context) {
  if (context.kind === "auto-accessor") {
    return {
      initialize(v) {
        return v * 2;
      }
    };
  }
}

function decorator2(value, context) {
  if (context.kind === "auto-accessor") {
    return {
      initialize(v) {
        return v * 3;
      }
    };
  }
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

let _C_p_initializer_j9e1e8;

let _C_p_initializer_9kfmq;

class C {
  #_p_private_property_3jhcn8 = _C_p_initializer_9kfmq.call(this, _C_p_initializer_j9e1e8.call(this, 1));
  get p() {
    return this.#_p_private_property_3jhcn8;
  }
  set p(v) {
    this.#_p_private_property_3jhcn8 = v;
  }
}

const _C_p_descriptor_ej773o = Object.getOwnPropertyDescriptor(C.prototype, "p");

const _C_p_result_gbqu4o = decorator1({
  get: _C_p_descriptor_ej773o.get,
  set: _C_p_descriptor_ej773o.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(C.prototype, "public", "p")
}) || {};

_C_p_initializer_9kfmq = _C_p_result_gbqu4o.initialize || (v => v);

Object.defineProperty(C.prototype, "p", {
  get: _C_p_result_gbqu4o.get || _C_p_descriptor_ej773o.get,
  set: _C_p_result_gbqu4o.set || _C_p_descriptor_ej773o.set
});

const _C_p_descriptor_uoa21 = Object.getOwnPropertyDescriptor(C.prototype, "p");

const _C_p_result_askho = decorator2({
  get: _C_p_descriptor_uoa21.get,
  set: _C_p_descriptor_uoa21.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(C.prototype, "public", "p")
}) || {};

_C_p_initializer_j9e1e8 = _C_p_result_askho.initialize || (v => v);

Object.defineProperty(C.prototype, "p", {
  get: _C_p_result_askho.get || _C_p_descriptor_uoa21.get,
  set: _C_p_result_askho.set || _C_p_descriptor_uoa21.set
});

const c = new C();

console.assert(c.p === 6);