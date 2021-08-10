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

let _MyClass_A_initializer_apvifg;

let _MyClass_P_initializer_nfp0d8;

class __MyClass_h4bd6o {
  [P] = _MyClass_P_initializer_nfp0d8.call(this, 1);
  [M]() {}
  get [G]() {
    return this[P];
  }
  set [G](v) {
    this[P] = v;
  }
  #_A_private_property_id37to = _MyClass_A_initializer_apvifg.call(this, 2);
  get [A]() {
    return this.#_A_private_property_id37to;
  }
  set [A](v) {
    this.#_A_private_property_id37to = v;
  }
}

_MyClass_P_initializer_nfp0d8 = checker("field", () => 2)(undefined, {
  kind: "field",
  name: P,
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(__MyClass_h4bd6o.prototype, "public", P)
}) ?? (v => v);

const ___MyClass_h4bd6o_A_descriptor_7hsp5 = Object.getOwnPropertyDescriptor(__MyClass_h4bd6o.prototype, A);

const ___MyClass_h4bd6o_A_result_u6q9no = checker("auto-accessor")({
  get: ___MyClass_h4bd6o_A_descriptor_7hsp5.get,
  set: ___MyClass_h4bd6o_A_descriptor_7hsp5.set
}, {
  kind: "auto-accessor",
  name: "A",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(__MyClass_h4bd6o.prototype, "public", A)
}) || {};

_MyClass_A_initializer_apvifg = ___MyClass_h4bd6o_A_result_u6q9no.initialize || (v => v);

Object.defineProperty(__MyClass_h4bd6o.prototype, A, {
  get: ___MyClass_h4bd6o_A_result_u6q9no.get || ___MyClass_h4bd6o_A_descriptor_7hsp5.get,
  set: ___MyClass_h4bd6o_A_result_u6q9no.set || ___MyClass_h4bd6o_A_descriptor_7hsp5.set
});

const _MyClass_G_descriptor_43a15o = Object.getOwnPropertyDescriptor(__MyClass_h4bd6o.prototype, G);

_MyClass_G_descriptor_43a15o.set = checker("setter", function() {
  this[P] = v * 2;
})(_MyClass_G_descriptor_43a15o.set, {
  kind: "setter",
  name: G,
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(__MyClass_h4bd6o.prototype, "public", G)
}) ?? _MyClass_G_descriptor_43a15o.set;

Object.defineProperty(__MyClass_h4bd6o.prototype, G, _MyClass_G_descriptor_43a15o);

const _MyClass_G_descriptor_h4pn3o = Object.getOwnPropertyDescriptor(__MyClass_h4bd6o.prototype, G);

_MyClass_G_descriptor_h4pn3o.get = checker("getter", function() {
  return this[P] * 2;
})(_MyClass_G_descriptor_h4pn3o.get, {
  kind: "getter",
  name: G,
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(__MyClass_h4bd6o.prototype, "public", G)
}) ?? _MyClass_G_descriptor_h4pn3o.get;

Object.defineProperty(__MyClass_h4bd6o.prototype, G, _MyClass_G_descriptor_h4pn3o);

__MyClass_h4bd6o.prototype[M] = checker("method", function() {
  return "abc";
})(__MyClass_h4bd6o.prototype[M], {
  kind: "method",
  name: M,
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(__MyClass_h4bd6o.prototype, "public", M)
}) ?? __MyClass_h4bd6o.prototype[M];

let MyClass = __MyClass_h4bd6o;

Object.defineProperty(MyClass, "name", {
  value: "MyClass"
});

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