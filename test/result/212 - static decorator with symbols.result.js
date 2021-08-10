function checker(kind, newValue) {
  return function(value, context) {
    console.assert(context.isStatic);
    console.assert(kind === context.kind);
    if (kind === "auto-accessor") {
      return {
        get() {
          return value.get.call(this) * 3;
        },
        set(v) {
          value.set.call(this, v * 3);
        },
        initialize(v) {
          return 3;
        }
      };
    }
    return newValue;
  };
}

const P = Symbol();

const M = Symbol();

const G = Symbol();

const A = Symbol();

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

let _MyClass_A_initializer_s79hdg;

class __MyClass_e10mg8 {
  static [P] = 1;
  static [M]() {}
  static get [G]() {
    return this[P];
  }
  static set [G](v) {
    this[P] = v;
  }
  static #_A_private_property_4u15do = 2;
  static get [A]() {
    return this.#_A_private_property_4u15do;
  }
  static set [A](v) {
    this.#_A_private_property_4u15do = v;
  }
}

const ___MyClass_e10mg8_A_descriptor_ovuq2g = Object.getOwnPropertyDescriptor(__MyClass_e10mg8, A);

const ___MyClass_e10mg8_A_result_r6q59 = checker("auto-accessor")({
  get: ___MyClass_e10mg8_A_descriptor_ovuq2g.get,
  set: ___MyClass_e10mg8_A_descriptor_ovuq2g.set
}, {
  kind: "auto-accessor",
  name: "A",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(__MyClass_e10mg8, "public", A)
}) || {};

_MyClass_A_initializer_s79hdg = ___MyClass_e10mg8_A_result_r6q59.initialize || (v => v);

Object.defineProperty(__MyClass_e10mg8, A, {
  get: ___MyClass_e10mg8_A_result_r6q59.get || ___MyClass_e10mg8_A_descriptor_ovuq2g.get,
  set: ___MyClass_e10mg8_A_result_r6q59.set || ___MyClass_e10mg8_A_descriptor_ovuq2g.set
});

___MyClass_e10mg8_A_descriptor_ovuq2g.set.call(
  __MyClass_e10mg8,
  _MyClass_A_initializer_s79hdg(___MyClass_e10mg8_A_descriptor_ovuq2g.get.call(__MyClass_e10mg8))
);

let MyClass = __MyClass_e10mg8;

Object.defineProperty(MyClass, "name", {
  value: "MyClass"
});

const _MyClass_G_descriptor_fbed7 = Object.getOwnPropertyDescriptor(MyClass, G);

_MyClass_G_descriptor_fbed7.set = checker("setter", function() {
  this[P] = v * 2;
})(_MyClass_G_descriptor_fbed7.set, {
  kind: "setter",
  name: G,
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(MyClass, "public", G)
}) ?? _MyClass_G_descriptor_fbed7.set;

Object.defineProperty(MyClass, G, _MyClass_G_descriptor_fbed7);

const _MyClass_G_descriptor_4an948 = Object.getOwnPropertyDescriptor(MyClass, G);

_MyClass_G_descriptor_4an948.get = checker("getter", function() {
  return this[P] * 2;
})(_MyClass_G_descriptor_4an948.get, {
  kind: "getter",
  name: G,
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(MyClass, "public", G)
}) ?? _MyClass_G_descriptor_4an948.get;

Object.defineProperty(MyClass, G, _MyClass_G_descriptor_4an948);

MyClass[M] = checker("method", function() {
  return "abc";
})(MyClass[M], {
  kind: "method",
  name: M,
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(MyClass, "public", M)
}) ?? MyClass[M];

const _MyClass_P_initializer_e0msmo = checker("field", () => 2)(undefined, {
  kind: "field",
  name: P,
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(MyClass, "public", P)
}) ?? (v => v);

MyClass[P] = _MyClass_P_initializer_e0msmo.call(MyClass, MyClass[P]);

console.assert(typeof MyClass[P] === "number");

console.assert(typeof MyClass[A] === "number");

console.assert(typeof MyClass[G] === "number");

console.assert(typeof MyClass[M] === "function");

console.assert(MyClass[P] === 2);

console.assert(MyClass[A] === 9);

MyClass[A] = 2;

console.assert(MyClass[A] === 18);

console.assert(MyClass[G] === 4);

console.assert(MyClass[M]() === "abc");