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

const _C_member_initializers_o5l3jo = [];

class C {
  constructor() {
    this.z = 100;
    _C_member_initializers_o5l3jo.forEach(initialize => initialize.call(this));
  }
  get p() {}
}

const _C_p_descriptor_6154l8 = Object.getOwnPropertyDescriptor(C.prototype, "p");

_C_p_descriptor_6154l8.get = addProperty("a", 1)(_C_p_descriptor_6154l8.get, {
  kind: "getter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(C.prototype, "public", "p"),
  addInitializer: initializer => _C_member_initializers_o5l3jo.push(initializer)
}) ?? _C_p_descriptor_6154l8.get;

Object.defineProperty(C.prototype, "p", _C_p_descriptor_6154l8);

const _C_p_descriptor_3monb8 = Object.getOwnPropertyDescriptor(C.prototype, "p");

_C_p_descriptor_3monb8.get = addProperty("b", 2)(_C_p_descriptor_3monb8.get, {
  kind: "getter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(C.prototype, "public", "p"),
  addInitializer: initializer => _C_member_initializers_o5l3jo.push(initializer)
}) ?? _C_p_descriptor_3monb8.get;

Object.defineProperty(C.prototype, "p", _C_p_descriptor_3monb8);

const _D_member_initializers_p763r = [];

class D extends C {
  constructor() {
    super();
    _D_member_initializers_p763r.forEach(initialize => initialize.call(this));
  }
  get p() {}
}

const _D_p_descriptor_rnobb = Object.getOwnPropertyDescriptor(D.prototype, "p");

_D_p_descriptor_rnobb.get = addProperty("c", 3)(_D_p_descriptor_rnobb.get, {
  kind: "getter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(D.prototype, "public", "p"),
  addInitializer: initializer => _D_member_initializers_p763r.push(initializer)
}) ?? _D_p_descriptor_rnobb.get;

Object.defineProperty(D.prototype, "p", _D_p_descriptor_rnobb);

const _D_p_descriptor_t1mej = Object.getOwnPropertyDescriptor(D.prototype, "p");

_D_p_descriptor_t1mej.get = addProperty("d", 4)(_D_p_descriptor_t1mej.get, {
  kind: "getter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(D.prototype, "public", "p"),
  addInitializer: initializer => _D_member_initializers_p763r.push(initializer)
}) ?? _D_p_descriptor_t1mej.get;

Object.defineProperty(D.prototype, "p", _D_p_descriptor_t1mej);

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