function addProperty(key, value) {
  return (klass, context) => {
    if (context.kind === "field" && context.addInitializer) {
      context.addInitializer(function() {
        this[key] = value;
      });
    }
  };
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

const _C_static_initializers_fquvu = [];

class C {
  constructor() {
    this.z = 100;
  }
  static p = 1;
}

const _C_p_initializer_oe1848 = addProperty("b", 2)(undefined, {
  kind: "field",
  name: "p",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(C, "public", "p"),
  addInitializer: initializer => _C_static_initializers_fquvu.push(initializer)
}) ?? (v => v);

C.p = _C_p_initializer_oe1848.call(C, C.p);

const _C_p_initializer_8lchi = addProperty("a", 1)(undefined, {
  kind: "field",
  name: "p",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(C, "public", "p"),
  addInitializer: initializer => _C_static_initializers_fquvu.push(initializer)
}) ?? (v => v);

C.p = _C_p_initializer_8lchi.call(C, C.p);

_C_static_initializers_fquvu.forEach(initializer => initializer.call(C, C));

const _D_static_initializers_m6iqc = [];

class D extends C {
  static p = 2;
}

const _D_p_initializer_5d1clg = addProperty("d", 4)(undefined, {
  kind: "field",
  name: "p",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(D, "public", "p"),
  addInitializer: initializer => _D_static_initializers_m6iqc.push(initializer)
}) ?? (v => v);

D.p = _D_p_initializer_5d1clg.call(D, D.p);

const _D_p_initializer_l3jrjo = addProperty("c", 3)(undefined, {
  kind: "field",
  name: "p",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(D, "public", "p"),
  addInitializer: initializer => _D_static_initializers_m6iqc.push(initializer)
}) ?? (v => v);

D.p = _D_p_initializer_l3jrjo.call(D, D.p);

_D_static_initializers_m6iqc.forEach(initializer => initializer.call(D, D));

console.assert(C.p === 1);

console.assert(C.a === 1);

console.assert(C.b === 2);

console.assert(C.c === undefined);

console.assert(C.d === undefined);

console.assert(D.p === 2);

console.assert(D.a === 1);

console.assert(D.b === 2);

console.assert(D.c === 3);

console.assert(D.d === 4);