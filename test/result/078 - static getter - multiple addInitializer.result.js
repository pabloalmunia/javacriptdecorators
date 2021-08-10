function addProperty(key, value) {
  return (klass, context) => {
    if ((context.kind === "method" || context.kind === "getter" || context.kind === "setter") && context.addInitializer) {
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

const _C_static_initializers_o1ehr = [];

class __C_0s9c {
  constructor() {
    this.z = 100;
  }
  static get p() {}
}

let C = __C_0s9c;

Object.defineProperty(C, "name", {
  value: "C"
});

const _C_p_descriptor_7i41ig = Object.getOwnPropertyDescriptor(__C_0s9c, "p");

_C_p_descriptor_7i41ig.get = addProperty("b", 2)(_C_p_descriptor_7i41ig.get, {
  kind: "getter",
  name: "p",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(__C_0s9c, "public", "p"),
  addInitializer: initializer => _C_static_initializers_o1ehr.push(initializer)
}) ?? _C_p_descriptor_7i41ig.get;

Object.defineProperty(__C_0s9c, "p", _C_p_descriptor_7i41ig);

const _C_p_descriptor_acg1jo = Object.getOwnPropertyDescriptor(__C_0s9c, "p");

_C_p_descriptor_acg1jo.get = addProperty("a", 1)(_C_p_descriptor_acg1jo.get, {
  kind: "getter",
  name: "p",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(__C_0s9c, "public", "p"),
  addInitializer: initializer => _C_static_initializers_o1ehr.push(initializer)
}) ?? _C_p_descriptor_acg1jo.get;

Object.defineProperty(__C_0s9c, "p", _C_p_descriptor_acg1jo);

_C_static_initializers_o1ehr.forEach(initializer => initializer.call(C, C));

const _D_static_initializers_n3hg6g = [];

class __D_anu738 extends C {
  static get p() {}
}

let D = __D_anu738;

Object.defineProperty(D, "name", {
  value: "D"
});

const _D_p_descriptor_f2t4hg = Object.getOwnPropertyDescriptor(__D_anu738, "p");

_D_p_descriptor_f2t4hg.get = addProperty("d", 4)(_D_p_descriptor_f2t4hg.get, {
  kind: "getter",
  name: "p",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(__D_anu738, "public", "p"),
  addInitializer: initializer => _D_static_initializers_n3hg6g.push(initializer)
}) ?? _D_p_descriptor_f2t4hg.get;

Object.defineProperty(__D_anu738, "p", _D_p_descriptor_f2t4hg);

const _D_p_descriptor_bteg9 = Object.getOwnPropertyDescriptor(__D_anu738, "p");

_D_p_descriptor_bteg9.get = addProperty("c", 3)(_D_p_descriptor_bteg9.get, {
  kind: "getter",
  name: "p",
  isStatic: true,
  isPrivate: false,
  ...__PrepareMetadata(__D_anu738, "public", "p"),
  addInitializer: initializer => _D_static_initializers_n3hg6g.push(initializer)
}) ?? _D_p_descriptor_bteg9.get;

Object.defineProperty(__D_anu738, "p", _D_p_descriptor_bteg9);

_D_static_initializers_n3hg6g.forEach(initializer => initializer.call(D, D));

console.assert(C.a === 1);

console.assert(C.b === 2);

console.assert(C.c === undefined);

console.assert(C.d === undefined);

console.assert(D.a === 1);

console.assert(D.b === 2);

console.assert(D.c === 3);

console.assert(D.d === 4);