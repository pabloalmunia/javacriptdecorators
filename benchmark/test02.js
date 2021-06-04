function emptyDecorator() {}

@emptyDecorator
class TestClass {
  @emptyDecorator
  p = 0;
  @emptyDecorator
  run() {
  }
  @emptyDecorator
  get g() {}
  @emptyDecorator
  set g(v) {}
}

function emptyDecorator() {}

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

let _TestClass_p_initializer_6ss46o;

class TestClass {
  p = _TestClass_p_initializer_6ss46o.call(this, 0);
  run() {}
  get g() {}
  set g(v) {}
}

_TestClass_p_initializer_6ss46o = emptyDecorator(undefined, {
  kind: "field",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(TestClass.prototype, "public", "p")
}) ?? (v => v);

const _TestClass_g_descriptor_ng5vlo = Object.getOwnPropertyDescriptor(TestClass.prototype, "g");

_TestClass_g_descriptor_ng5vlo.set = emptyDecorator(_TestClass_g_descriptor_ng5vlo.set, {
  kind: "setter",
  name: "g",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(TestClass.prototype, "public", "g")
}) ?? _TestClass_g_descriptor_ng5vlo.set;

Object.defineProperty(TestClass.prototype, "g", _TestClass_g_descriptor_ng5vlo);

const _TestClass_g_descriptor_51dc6 = Object.getOwnPropertyDescriptor(TestClass.prototype, "g");

_TestClass_g_descriptor_51dc6.get = emptyDecorator(_TestClass_g_descriptor_51dc6.get, {
  kind: "getter",
  name: "g",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(TestClass.prototype, "public", "g")
}) ?? _TestClass_g_descriptor_51dc6.get;

Object.defineProperty(TestClass.prototype, "g", _TestClass_g_descriptor_51dc6);

TestClass.prototype.run = emptyDecorator(TestClass.prototype.run, {
  kind: "method",
  name: "run",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(TestClass.prototype, "public", "run")
}) ?? TestClass.prototype.run;

TestClass = emptyDecorator(TestClass, {
  kind: "class",
  name: "TestClass",
  ...__PrepareMetadata(TestClass, "constructor", undefined)
}) ?? TestClass;
const objs = [];
for (let n = 0; n < 1000000; n++) {
  objs.push (new TestClass());
}
// module.exports = () => {
//   const {performance} = require ('perf_hooks');
//   const objs          = [];
//   const start         = performance.now ();
//   for (let n = 0; n < 1000000; n++) {
//     objs.push (new TestClass ());
//   }
//   const end = performance.now ();
//   console.log ('test02', end - start);
// }