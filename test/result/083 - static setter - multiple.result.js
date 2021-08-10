function decorator1(value, context) {
  if (context.kind === "setter") {
    return function(v) {
      value.call(this, v * 2);
    };
  }
}

function decorator2(value, context) {
  if (context.kind === "setter") {
    return function(v) {
      value.call(this, v * 3);
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

class __C_p647ao {
  static #p = 0;
  static set p(v) {
    this.#p = v;
  }
  static get p() {
    return this.#p;
  }
}

let C = __C_p647ao;

Object.defineProperty(C, "name", {
  value: "C"
});

const _C_p_descriptor_mokndo = Object.getOwnPropertyDescriptor(__C_p647ao, "p");

_C_p_descriptor_mokndo.set = decorator2(_C_p_descriptor_mokndo.set, {
  kind: "setter",
  name: "p",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(__C_p647ao, "public", "p")
}) ?? _C_p_descriptor_mokndo.set;

Object.defineProperty(__C_p647ao, "p", _C_p_descriptor_mokndo);

const _C_p_descriptor_avaiq8 = Object.getOwnPropertyDescriptor(__C_p647ao, "p");

_C_p_descriptor_avaiq8.set = decorator1(_C_p_descriptor_avaiq8.set, {
  kind: "setter",
  name: "p",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(__C_p647ao, "public", "p")
}) ?? _C_p_descriptor_avaiq8.set;

Object.defineProperty(__C_p647ao, "p", _C_p_descriptor_avaiq8);

console.assert(C.p === 0);

C.p = 1;

console.assert(C.p === 6);