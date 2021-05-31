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

const _C_member_initializers_rtukfg = [];

class C {
  constructor() {
    this.z = 100;
    _C_member_initializers_rtukfg.forEach(initialize => initialize.call(this));
  }
  get p() {}
}

const _C_p_descriptor_d9vnv = Object.getOwnPropertyDescriptor(C.prototype, "p");

_C_p_descriptor_d9vnv.get = addProperty("a", 1)(_C_p_descriptor_d9vnv.get, {
  kind: "getter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(C.prototype, "public", "p"),
  addInitializer: initializer => _C_member_initializers_rtukfg.push(initializer)
}) ?? _C_p_descriptor_d9vnv.get;

Object.defineProperty(C.prototype, "p", _C_p_descriptor_d9vnv);

const _C_p_descriptor_m5s82o = Object.getOwnPropertyDescriptor(C.prototype, "p");

_C_p_descriptor_m5s82o.get = addProperty("b", 2)(_C_p_descriptor_m5s82o.get, {
  kind: "getter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(C.prototype, "public", "p"),
  addInitializer: initializer => _C_member_initializers_rtukfg.push(initializer)
}) ?? _C_p_descriptor_m5s82o.get;

Object.defineProperty(C.prototype, "p", _C_p_descriptor_m5s82o);

const _D_member_initializers_kbt5d = [];

class D extends C {
  constructor() {
    super();
    _D_member_initializers_kbt5d.forEach(initialize => initialize.call(this));
  }
  get p() {}
}

const _D_p_descriptor_81t05 = Object.getOwnPropertyDescriptor(D.prototype, "p");

_D_p_descriptor_81t05.get = addProperty("c", 3)(_D_p_descriptor_81t05.get, {
  kind: "getter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(D.prototype, "public", "p"),
  addInitializer: initializer => _D_member_initializers_kbt5d.push(initializer)
}) ?? _D_p_descriptor_81t05.get;

Object.defineProperty(D.prototype, "p", _D_p_descriptor_81t05);

const _D_p_descriptor_t32i1g = Object.getOwnPropertyDescriptor(D.prototype, "p");

_D_p_descriptor_t32i1g.get = addProperty("d", 4)(_D_p_descriptor_t32i1g.get, {
  kind: "getter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(D.prototype, "public", "p"),
  addInitializer: initializer => _D_member_initializers_kbt5d.push(initializer)
}) ?? _D_p_descriptor_t32i1g.get;

Object.defineProperty(D.prototype, "p", _D_p_descriptor_t32i1g);

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