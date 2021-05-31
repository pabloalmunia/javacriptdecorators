function decorator(value, context) {
  if (context.kind === "method") {
    context.addInitializer(function() {
      this.test = 20;
    });
    return function(v) {
      return value.call(this, v * 2);
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

const _C_static_initializers_1jooeg = [];

const _C_class_initializers_pasgl8 = [];

class C {
  static M(n) {
    return n * 2;
  }
}

C = decorator(C, {
  kind: "class",
  name: "C",
  ...__PrepareMetadata(C, "constructor", undefined),
  addInitializer: initializer => _C_class_initializers_pasgl8.push(initializer)
}) ?? C;

C.M = decorator(C.M, {
  kind: "method",
  name: "M",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(C, "public", "M"),
  addInitializer: initializer => _C_static_initializers_1jooeg.push(initializer)
}) ?? C.M;

_C_static_initializers_1jooeg.forEach(initializer => initializer.call(C, C));

_C_class_initializers_pasgl8.forEach(initializer => initializer.call(C, C));

console.assert(C.test === 20);

console.assert(C.M(2) === 8);