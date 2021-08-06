function checker(kind, newValue) {
  return function(value, context) {
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

let _MyClass_A_initializer_hlmkg8;

let _MyClass_P_initializer_a0m7kg;

class MyClass {
  [P] = _MyClass_P_initializer_a0m7kg.call(this, 1);
  [M]() {}
  get [G]() {
    return this[P];
  }
  set [G](v) {
    this[P] = v;
  }
  #_A_private_property_udua = _MyClass_A_initializer_hlmkg8.call(this, 2);
  get [A]() {
    return this.#_A_private_property_udua;
  }
  set [A](v) {
    this.#_A_private_property_udua = v;
  }
}

_MyClass_P_initializer_a0m7kg = checker("field", () => 2)(undefined, {
  kind: "field",
  name: P,
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(MyClass.prototype, "public", P)
}) ?? (v => v);

const _MyClass_A_descriptor_49aep = Object.getOwnPropertyDescriptor(MyClass.prototype, A);

const _MyClass_A_result_6dm1n = checker("auto-accessor")({
  get: _MyClass_A_descriptor_49aep.get,
  set: _MyClass_A_descriptor_49aep.set
}, {
  kind: "auto-accessor",
  name: "A",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(MyClass.prototype, "public", A)
}) || {};

_MyClass_A_initializer_hlmkg8 = _MyClass_A_result_6dm1n.initialize || (v => v);

Object.defineProperty(MyClass.prototype, A, {
  get: _MyClass_A_result_6dm1n.get || _MyClass_A_descriptor_49aep.get,
  set: _MyClass_A_result_6dm1n.set || _MyClass_A_descriptor_49aep.set
});

const _MyClass_G_descriptor_hq7lb = Object.getOwnPropertyDescriptor(MyClass.prototype, G);

_MyClass_G_descriptor_hq7lb.set = checker("setter", function() {
  this[P] = v * 2;
})(_MyClass_G_descriptor_hq7lb.set, {
  kind: "setter",
  name: G,
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(MyClass.prototype, "public", G)
}) ?? _MyClass_G_descriptor_hq7lb.set;

Object.defineProperty(MyClass.prototype, G, _MyClass_G_descriptor_hq7lb);

const _MyClass_G_descriptor_helmv8 = Object.getOwnPropertyDescriptor(MyClass.prototype, G);

_MyClass_G_descriptor_helmv8.get = checker("getter", function() {
  return this[P] * 2;
})(_MyClass_G_descriptor_helmv8.get, {
  kind: "getter",
  name: G,
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(MyClass.prototype, "public", G)
}) ?? _MyClass_G_descriptor_helmv8.get;

Object.defineProperty(MyClass.prototype, G, _MyClass_G_descriptor_helmv8);

MyClass.prototype[M] = checker("method", function() {
  return "abc";
})(MyClass.prototype[M], {
  kind: "method",
  name: M,
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(MyClass.prototype, "public", M)
}) ?? MyClass.prototype[M];

const myObject = new MyClass();

console.assert(typeof myObject[P] === "number");

console.assert(typeof myObject[A] === "number");

console.assert(typeof myObject[G] === "number");

console.assert(typeof myObject[M] === "function");

console.assert(myObject[P] === 2);

console.assert(myObject[A] === 9);

myObject[A] = 2;

console.assert(myObject[A] === 18);

console.assert(myObject[G] === 4);

console.assert(myObject[M]() === "abc");