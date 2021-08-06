function addProperty(key, value) {
  return (klass, context) => {
    if (context.kind === "class" && context.addInitializer) {
      context.addInitializer(function() {
        this.prototype[key] = value;
      });
    }
  };
}

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

const _C_class_initializers_j47vpo = [];

class C {}

C = addProperty("b", 2)(C, {
  kind: "class",
  name: "C",
  ...__PrepareMetadata(C, "constructor", undefined),
  addInitializer: initializer => _C_class_initializers_j47vpo.push(initializer)
}) ?? C;

C = addProperty("a", 1)(C, {
  kind: "class",
  name: "C",
  ...__PrepareMetadata(C, "constructor", undefined),
  addInitializer: initializer => _C_class_initializers_j47vpo.push(initializer)
}) ?? C;

_C_class_initializers_j47vpo.forEach(initializer => initializer.call(C, C));

const _D_class_initializers_amflno = [];

class D extends C {}

D = addProperty("d", 4)(D, {
  kind: "class",
  name: "D",
  ...__PrepareMetadata(D, "constructor", undefined),
  addInitializer: initializer => _D_class_initializers_amflno.push(initializer)
}) ?? D;

D = addProperty("c", 3)(D, {
  kind: "class",
  name: "D",
  ...__PrepareMetadata(D, "constructor", undefined),
  addInitializer: initializer => _D_class_initializers_amflno.push(initializer)
}) ?? D;

_D_class_initializers_amflno.forEach(initializer => initializer.call(D, D));

const c = new C();

console.assert(c.a === 1);

console.assert(c.b === 2);

console.assert(c.c === undefined);

console.assert(c.d === undefined);

const d = new D();

console.assert(d.a === 1);

console.assert(d.b === 2);

console.assert(d.c === 3);

console.assert(d.d === 4);