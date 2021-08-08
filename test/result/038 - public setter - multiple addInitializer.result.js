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

const _C_member_initializers_d49ndg = [];

class C {
  constructor() {
    this.z = 100;
    _C_member_initializers_d49ndg.forEach(initialize => initialize.call(this));
  }
  set p(v) {}
}

const _C_p_descriptor_lr94f8 = Object.getOwnPropertyDescriptor(C.prototype, "p");

_C_p_descriptor_lr94f8.set = addProperty("a", 1)(_C_p_descriptor_lr94f8.set, {
  kind: "setter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(C.prototype, "public", "p"),
  addInitializer: initializer => _C_member_initializers_d49ndg.push(initializer)
}) ?? _C_p_descriptor_lr94f8.set;

Object.defineProperty(C.prototype, "p", _C_p_descriptor_lr94f8);

const _C_p_descriptor_pmu768 = Object.getOwnPropertyDescriptor(C.prototype, "p");

_C_p_descriptor_pmu768.set = addProperty("b", 2)(_C_p_descriptor_pmu768.set, {
  kind: "setter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(C.prototype, "public", "p"),
  addInitializer: initializer => _C_member_initializers_d49ndg.push(initializer)
}) ?? _C_p_descriptor_pmu768.set;

Object.defineProperty(C.prototype, "p", _C_p_descriptor_pmu768);

const _D_member_initializers_5eieug = [];

class D extends C {
  constructor() {
    super();
    _D_member_initializers_5eieug.forEach(initialize => initialize.call(this));
  }
  set p(v) {}
}

const _D_p_descriptor_lnmn2 = Object.getOwnPropertyDescriptor(D.prototype, "p");

_D_p_descriptor_lnmn2.set = addProperty("c", 3)(_D_p_descriptor_lnmn2.set, {
  kind: "setter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(D.prototype, "public", "p"),
  addInitializer: initializer => _D_member_initializers_5eieug.push(initializer)
}) ?? _D_p_descriptor_lnmn2.set;

Object.defineProperty(D.prototype, "p", _D_p_descriptor_lnmn2);

const _D_p_descriptor_1cgeq8 = Object.getOwnPropertyDescriptor(D.prototype, "p");

_D_p_descriptor_1cgeq8.set = addProperty("d", 4)(_D_p_descriptor_1cgeq8.set, {
  kind: "setter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(D.prototype, "public", "p"),
  addInitializer: initializer => _D_member_initializers_5eieug.push(initializer)
}) ?? _D_p_descriptor_1cgeq8.set;

Object.defineProperty(D.prototype, "p", _D_p_descriptor_1cgeq8);

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