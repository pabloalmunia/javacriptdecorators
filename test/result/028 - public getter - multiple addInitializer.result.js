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
  const createObjectWithPrototype = (obj, key) => Object.hasOwnProperty.call(obj, key) ? obj[key] : Object.create(obj[key] || null);
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

const _C_member_initializers_11v0l = [];

class C {
  constructor() {
    this.z = 100;
    _C_member_initializers_11v0l.forEach(initialize => initialize.call(this));
  }
  get p() {}
}

const _C_p_descriptor_7k9o28 = Object.getOwnPropertyDescriptor(C.prototype, "p");

_C_p_descriptor_7k9o28.get = addProperty("a", 1)(_C_p_descriptor_7k9o28.get, {
  kind: "getter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(C.prototype, "public", "p"),
  addInitializer: initializer => _C_member_initializers_11v0l.push(initializer)
}) ?? _C_p_descriptor_7k9o28.get;

Object.defineProperty(C.prototype, "p", _C_p_descriptor_7k9o28);

const _C_p_descriptor_dedh3g = Object.getOwnPropertyDescriptor(C.prototype, "p");

_C_p_descriptor_dedh3g.get = addProperty("b", 2)(_C_p_descriptor_dedh3g.get, {
  kind: "getter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(C.prototype, "public", "p"),
  addInitializer: initializer => _C_member_initializers_11v0l.push(initializer)
}) ?? _C_p_descriptor_dedh3g.get;

Object.defineProperty(C.prototype, "p", _C_p_descriptor_dedh3g);

const _D_member_initializers_3v7cdg = [];

class D extends C {
  constructor() {
    super();
    _D_member_initializers_3v7cdg.forEach(initialize => initialize.call(this));
  }
  get p() {}
}

const _D_p_descriptor_ttrdfo = Object.getOwnPropertyDescriptor(D.prototype, "p");

_D_p_descriptor_ttrdfo.get = addProperty("c", 3)(_D_p_descriptor_ttrdfo.get, {
  kind: "getter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(D.prototype, "public", "p"),
  addInitializer: initializer => _D_member_initializers_3v7cdg.push(initializer)
}) ?? _D_p_descriptor_ttrdfo.get;

Object.defineProperty(D.prototype, "p", _D_p_descriptor_ttrdfo);

const _D_p_descriptor_ggeefg = Object.getOwnPropertyDescriptor(D.prototype, "p");

_D_p_descriptor_ggeefg.get = addProperty("d", 4)(_D_p_descriptor_ggeefg.get, {
  kind: "getter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(D.prototype, "public", "p"),
  addInitializer: initializer => _D_member_initializers_3v7cdg.push(initializer)
}) ?? _D_p_descriptor_ggeefg.get;

Object.defineProperty(D.prototype, "p", _D_p_descriptor_ggeefg);

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