function deco1(value, context) {
  if (context.kind === "auto-accessor") {
    return {
      set(v) {
        value.set.call(this, v * 2);
      }
    };
  }
}

function deco2(value, context) {
  if (context.kind === "auto-accessor") {
    return {
      set(v) {
        value.set.call(this, v * 3);
      }
    };
  }
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

let _C_p_initializer_522nto;

let _C_p_initializer_n91v6;

class C {
  #_p_private_property_7ks0qg = _C_p_initializer_n91v6.call(this, _C_p_initializer_522nto.call(this, ));
  get p() {
    return this.#_p_private_property_7ks0qg;
  }
  set p(v) {
    this.#_p_private_property_7ks0qg = v;
  }
}

const _C_p_descriptor_gbcp3g = Object.getOwnPropertyDescriptor(C.prototype, "p");

const _C_p_result_e7bdn8 = deco1({
  get: _C_p_descriptor_gbcp3g.get,
  set: _C_p_descriptor_gbcp3g.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(C.prototype, "public", "p")
}) || {};

_C_p_initializer_n91v6 = _C_p_result_e7bdn8.initialize || (v => v);

Object.defineProperty(C.prototype, "p", {
  get: _C_p_result_e7bdn8.get || _C_p_descriptor_gbcp3g.get,
  set: _C_p_result_e7bdn8.set || _C_p_descriptor_gbcp3g.set
});

const _C_p_descriptor_vs3lu8 = Object.getOwnPropertyDescriptor(C.prototype, "p");

const _C_p_result_ju39l = deco2({
  get: _C_p_descriptor_vs3lu8.get,
  set: _C_p_descriptor_vs3lu8.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(C.prototype, "public", "p")
}) || {};

_C_p_initializer_522nto = _C_p_result_ju39l.initialize || (v => v);

Object.defineProperty(C.prototype, "p", {
  get: _C_p_result_ju39l.get || _C_p_descriptor_vs3lu8.get,
  set: _C_p_result_ju39l.set || _C_p_descriptor_vs3lu8.set
});

const c = new C();

c.p = 10;

console.assert(c.p === 60);