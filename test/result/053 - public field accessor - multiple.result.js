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

let _C_p_initializer_2lgofo;

let _C_p_initializer_s7c1do;

class __C_voi5n8 {
  #_p_private_property_jthj0o = _C_p_initializer_s7c1do.call(this, _C_p_initializer_2lgofo.call(this, 1));
  get p() {
    return this.#_p_private_property_jthj0o;
  }
  set p(v) {
    this.#_p_private_property_jthj0o = v;
  }
}

const ___C_voi5n8_p_descriptor_kuf5m = Object.getOwnPropertyDescriptor(__C_voi5n8.prototype, "p");

const ___C_voi5n8_p_result_0onf2g = decorator1({
  get: ___C_voi5n8_p_descriptor_kuf5m.get,
  set: ___C_voi5n8_p_descriptor_kuf5m.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(__C_voi5n8.prototype, "public", "p")
}) || {};

_C_p_initializer_s7c1do = ___C_voi5n8_p_result_0onf2g.initialize || (v => v);

Object.defineProperty(__C_voi5n8.prototype, "p", {
  get: ___C_voi5n8_p_result_0onf2g.get || ___C_voi5n8_p_descriptor_kuf5m.get,
  set: ___C_voi5n8_p_result_0onf2g.set || ___C_voi5n8_p_descriptor_kuf5m.set
});

const ___C_voi5n8_p_descriptor_6rvpgo = Object.getOwnPropertyDescriptor(__C_voi5n8.prototype, "p");

const ___C_voi5n8_p_result_t92l0o = decorator2({
  get: ___C_voi5n8_p_descriptor_6rvpgo.get,
  set: ___C_voi5n8_p_descriptor_6rvpgo.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(__C_voi5n8.prototype, "public", "p")
}) || {};

_C_p_initializer_2lgofo = ___C_voi5n8_p_result_t92l0o.initialize || (v => v);

Object.defineProperty(__C_voi5n8.prototype, "p", {
  get: ___C_voi5n8_p_result_t92l0o.get || ___C_voi5n8_p_descriptor_6rvpgo.get,
  set: ___C_voi5n8_p_result_t92l0o.set || ___C_voi5n8_p_descriptor_6rvpgo.set
});

let C = __C_voi5n8;

Object.defineProperty(C, "name", {
  value: "C"
});

const c = new C();

console.assert(c.p === 6);