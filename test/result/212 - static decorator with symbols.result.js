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
  const createObjectWithPrototype = (obj, key) => Object.hasOwnProperty.call(obj, key) ? obj[key] : Object.create(obj[key] || {});
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

let _MyClass_A_initializer_2a71t8;

class MyClass {
  static [P] = 1;
  static [M]() {}
  static get [G]() {
    return this[P];
  }
  static set [G](v) {
    this[P] = v;
  }
  static #_A_private_property_0skioo = 2;
  static get [A]() {
    return this.#_A_private_property_0skioo;
  }
  static set [A](v) {
    this.#_A_private_property_0skioo = v;
  }
}

const _MyClass_A_descriptor_luvbn8 = Object.getOwnPropertyDescriptor(MyClass, A);

const _MyClass_A_result_fit59g = checker("auto-accessor")({
  get: _MyClass_A_descriptor_luvbn8.get,
  set: _MyClass_A_descriptor_luvbn8.set
}, {
  kind: "auto-accessor",
  name: "A",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(MyClass, "public", A)
}) || {};

_MyClass_A_initializer_2a71t8 = _MyClass_A_result_fit59g.initialize || (v => v);

Object.defineProperty(MyClass, A, {
  get: _MyClass_A_result_fit59g.get || _MyClass_A_descriptor_luvbn8.get,
  set: _MyClass_A_result_fit59g.set || _MyClass_A_descriptor_luvbn8.set
});

_MyClass_A_descriptor_luvbn8.set.call(
  MyClass,
  _MyClass_A_initializer_2a71t8(_MyClass_A_descriptor_luvbn8.get.call(MyClass))
);

const _MyClass_G_descriptor_qjl0ro = Object.getOwnPropertyDescriptor(MyClass, G);

_MyClass_G_descriptor_qjl0ro.set = checker("setter", function() {
  this[P] = v * 2;
})(_MyClass_G_descriptor_qjl0ro.set, {
  kind: "setter",
  name: G,
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(MyClass, "public", G)
}) ?? _MyClass_G_descriptor_qjl0ro.set;

Object.defineProperty(MyClass, G, _MyClass_G_descriptor_qjl0ro);

const _MyClass_G_descriptor_ok4j78 = Object.getOwnPropertyDescriptor(MyClass, G);

_MyClass_G_descriptor_ok4j78.get = checker("getter", function() {
  return this[P] * 2;
})(_MyClass_G_descriptor_ok4j78.get, {
  kind: "getter",
  name: G,
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(MyClass, "public", G)
}) ?? _MyClass_G_descriptor_ok4j78.get;

Object.defineProperty(MyClass, G, _MyClass_G_descriptor_ok4j78);

MyClass[M] = checker("method", function() {
  return "abc";
})(MyClass[M], {
  kind: "method",
  name: M,
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(MyClass, "public", M)
}) ?? MyClass[M];

const _MyClass_P_initializer_9brua = checker("field", () => 2)(undefined, {
  kind: "field",
  name: P,
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(MyClass, "public", P)
}) ?? (v => v);

MyClass[P] = _MyClass_P_initializer_9brua.call(MyClass, MyClass[P]);

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