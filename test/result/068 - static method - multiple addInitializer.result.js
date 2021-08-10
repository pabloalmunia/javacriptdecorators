function addProperty(key, value) {
  return (klass, context) => {
    if (context.kind === "method" && context.addInitializer) {
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

const _C_static_initializers_n9ueng = [];

class __C_ss7v4g {
  constructor() {
    this.z = 100;
  }
  static m() {}
}

let C = __C_ss7v4g;

Object.defineProperty(C, "name", {
  value: "C"
});

__C_ss7v4g.m = addProperty("b", 2)(__C_ss7v4g.m, {
  kind: "method",
  name: "m",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(__C_ss7v4g, "public", "m"),
  addInitializer: initializer => _C_static_initializers_n9ueng.push(initializer)
}) ?? __C_ss7v4g.m;

__C_ss7v4g.m = addProperty("a", 1)(__C_ss7v4g.m, {
  kind: "method",
  name: "m",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(__C_ss7v4g, "public", "m"),
  addInitializer: initializer => _C_static_initializers_n9ueng.push(initializer)
}) ?? __C_ss7v4g.m;

_C_static_initializers_n9ueng.forEach(initializer => initializer.call(C, C));

const _D_static_initializers_cmvrrg = [];

class __D_mgehlo extends C {
  static m() {}
}

let D = __D_mgehlo;

Object.defineProperty(D, "name", {
  value: "D"
});

__D_mgehlo.m = addProperty("d", 4)(__D_mgehlo.m, {
  kind: "method",
  name: "m",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(__D_mgehlo, "public", "m"),
  addInitializer: initializer => _D_static_initializers_cmvrrg.push(initializer)
}) ?? __D_mgehlo.m;

__D_mgehlo.m = addProperty("c", 3)(__D_mgehlo.m, {
  kind: "method",
  name: "m",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(__D_mgehlo, "public", "m"),
  addInitializer: initializer => _D_static_initializers_cmvrrg.push(initializer)
}) ?? __D_mgehlo.m;

_D_static_initializers_cmvrrg.forEach(initializer => initializer.call(D, D));

console.assert(C.a === 1);

console.assert(C.b === 2);

console.assert(C.c === undefined);

console.assert(C.d === undefined);

console.assert(D.a === 1);

console.assert(D.b === 2);

console.assert(D.c === 3);

console.assert(D.d === 4);