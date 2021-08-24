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

const _C_member_initializers_qm3gsg = [];

class C {
  constructor() {
    this.z = 100;
    _C_member_initializers_qm3gsg.forEach(initialize => initialize.call(this));
  }
  get p() {}
}

const _C_p_descriptor_eca3qo = Object.getOwnPropertyDescriptor(C.prototype, "p");

_C_p_descriptor_eca3qo.get = addProperty("a", 1)(_C_p_descriptor_eca3qo.get, {
  kind: "getter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(C.prototype, "public", "p"),
  addInitializer: initializer => _C_member_initializers_qm3gsg.push(initializer)
}) ?? _C_p_descriptor_eca3qo.get;

Object.defineProperty(C.prototype, "p", _C_p_descriptor_eca3qo);

const _C_p_descriptor_ubqf6g = Object.getOwnPropertyDescriptor(C.prototype, "p");

_C_p_descriptor_ubqf6g.get = addProperty("b", 2)(_C_p_descriptor_ubqf6g.get, {
  kind: "getter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(C.prototype, "public", "p"),
  addInitializer: initializer => _C_member_initializers_qm3gsg.push(initializer)
}) ?? _C_p_descriptor_ubqf6g.get;

Object.defineProperty(C.prototype, "p", _C_p_descriptor_ubqf6g);

const _D_member_initializers_5s0ps = [];

class D extends C {
  constructor() {
    super();
    _D_member_initializers_5s0ps.forEach(initialize => initialize.call(this));
  }
  get p() {}
}

const _D_p_descriptor_gkq2so = Object.getOwnPropertyDescriptor(D.prototype, "p");

_D_p_descriptor_gkq2so.get = addProperty("c", 3)(_D_p_descriptor_gkq2so.get, {
  kind: "getter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(D.prototype, "public", "p"),
  addInitializer: initializer => _D_member_initializers_5s0ps.push(initializer)
}) ?? _D_p_descriptor_gkq2so.get;

Object.defineProperty(D.prototype, "p", _D_p_descriptor_gkq2so);

const _D_p_descriptor_lafd5o = Object.getOwnPropertyDescriptor(D.prototype, "p");

_D_p_descriptor_lafd5o.get = addProperty("d", 4)(_D_p_descriptor_lafd5o.get, {
  kind: "getter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(D.prototype, "public", "p"),
  addInitializer: initializer => _D_member_initializers_5s0ps.push(initializer)
}) ?? _D_p_descriptor_lafd5o.get;

Object.defineProperty(D.prototype, "p", _D_p_descriptor_lafd5o);

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