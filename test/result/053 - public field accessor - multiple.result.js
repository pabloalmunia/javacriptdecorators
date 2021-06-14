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

let _C_p_initializer_ib0q08;

let _C_p_initializer_lg30og;

class C {
  #_p_private_property_qbbi48 = _C_p_initializer_lg30og.call(this, _C_p_initializer_ib0q08.call(this, 1));
  get p() {
    return this.#_p_private_property_qbbi48;
  }
  set p(v) {
    this.#_p_private_property_qbbi48 = v;
  }
}

const _C_p_descriptor_qtm59g = Object.getOwnPropertyDescriptor(C.prototype, "p");

const _C_p_result_u7m5s8 = decorator1({
  get: _C_p_descriptor_qtm59g.get,
  set: _C_p_descriptor_qtm59g.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(C.prototype, "public", "p")
}) || {};

_C_p_initializer_lg30og = _C_p_result_u7m5s8.initialize || (v => v);

Object.defineProperty(C.prototype, "p", {
  get: _C_p_result_u7m5s8.get || _C_p_descriptor_qtm59g.get,
  set: _C_p_result_u7m5s8.set || _C_p_descriptor_qtm59g.set
});

const _C_p_descriptor_pq3beo = Object.getOwnPropertyDescriptor(C.prototype, "p");

const _C_p_result_scg7co = decorator2({
  get: _C_p_descriptor_pq3beo.get,
  set: _C_p_descriptor_pq3beo.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(C.prototype, "public", "p")
}) || {};

_C_p_initializer_ib0q08 = _C_p_result_scg7co.initialize || (v => v);

Object.defineProperty(C.prototype, "p", {
  get: _C_p_result_scg7co.get || _C_p_descriptor_pq3beo.get,
  set: _C_p_result_scg7co.set || _C_p_descriptor_pq3beo.set
});

const c = new C();

console.assert(c.p === 6);