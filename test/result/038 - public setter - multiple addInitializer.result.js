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

const _C_member_initializers_68h9c = [];

class __C_0bfmvo {
  constructor() {
    this.z = 100;
    _C_member_initializers_68h9c.forEach(initialize => initialize.call(this));
  }
  set p(v) {}
}

const _C_p_descriptor_e8cje = Object.getOwnPropertyDescriptor(__C_0bfmvo.prototype, "p");

_C_p_descriptor_e8cje.set = addProperty("a", 1)(_C_p_descriptor_e8cje.set, {
  kind: "setter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(__C_0bfmvo.prototype, "public", "p"),
  addInitializer: initializer => _C_member_initializers_68h9c.push(initializer)
}) ?? _C_p_descriptor_e8cje.set;

Object.defineProperty(__C_0bfmvo.prototype, "p", _C_p_descriptor_e8cje);

const _C_p_descriptor_088dh8 = Object.getOwnPropertyDescriptor(__C_0bfmvo.prototype, "p");

_C_p_descriptor_088dh8.set = addProperty("b", 2)(_C_p_descriptor_088dh8.set, {
  kind: "setter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(__C_0bfmvo.prototype, "public", "p"),
  addInitializer: initializer => _C_member_initializers_68h9c.push(initializer)
}) ?? _C_p_descriptor_088dh8.set;

Object.defineProperty(__C_0bfmvo.prototype, "p", _C_p_descriptor_088dh8);

let C = __C_0bfmvo;

Object.defineProperty(C, "name", {
  value: "C"
});

const _D_member_initializers_i39me8 = [];

class __D_maf6d8 extends C {
  constructor() {
    super();
    _D_member_initializers_i39me8.forEach(initialize => initialize.call(this));
  }
  set p(v) {}
}

const _D_p_descriptor_53fr1g = Object.getOwnPropertyDescriptor(__D_maf6d8.prototype, "p");

_D_p_descriptor_53fr1g.set = addProperty("c", 3)(_D_p_descriptor_53fr1g.set, {
  kind: "setter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(__D_maf6d8.prototype, "public", "p"),
  addInitializer: initializer => _D_member_initializers_i39me8.push(initializer)
}) ?? _D_p_descriptor_53fr1g.set;

Object.defineProperty(__D_maf6d8.prototype, "p", _D_p_descriptor_53fr1g);

const _D_p_descriptor_0j65l8 = Object.getOwnPropertyDescriptor(__D_maf6d8.prototype, "p");

_D_p_descriptor_0j65l8.set = addProperty("d", 4)(_D_p_descriptor_0j65l8.set, {
  kind: "setter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(__D_maf6d8.prototype, "public", "p"),
  addInitializer: initializer => _D_member_initializers_i39me8.push(initializer)
}) ?? _D_p_descriptor_0j65l8.set;

Object.defineProperty(__D_maf6d8.prototype, "p", _D_p_descriptor_0j65l8);

let D = __D_maf6d8;

Object.defineProperty(D, "name", {
  value: "D"
});

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