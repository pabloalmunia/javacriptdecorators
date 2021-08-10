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

const _C_member_initializers_q4d458 = [];

class __C_rkm5r8 {
  constructor() {
    this.z = 100;
    _C_member_initializers_q4d458.forEach(initialize => initialize.call(this));
  }
  get p() {}
}

const _C_p_descriptor_ve2htg = Object.getOwnPropertyDescriptor(__C_rkm5r8.prototype, "p");

_C_p_descriptor_ve2htg.get = addProperty("a", 1)(_C_p_descriptor_ve2htg.get, {
  kind: "getter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(__C_rkm5r8.prototype, "public", "p"),
  addInitializer: initializer => _C_member_initializers_q4d458.push(initializer)
}) ?? _C_p_descriptor_ve2htg.get;

Object.defineProperty(__C_rkm5r8.prototype, "p", _C_p_descriptor_ve2htg);

const _C_p_descriptor_g9hls8 = Object.getOwnPropertyDescriptor(__C_rkm5r8.prototype, "p");

_C_p_descriptor_g9hls8.get = addProperty("b", 2)(_C_p_descriptor_g9hls8.get, {
  kind: "getter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(__C_rkm5r8.prototype, "public", "p"),
  addInitializer: initializer => _C_member_initializers_q4d458.push(initializer)
}) ?? _C_p_descriptor_g9hls8.get;

Object.defineProperty(__C_rkm5r8.prototype, "p", _C_p_descriptor_g9hls8);

let C = __C_rkm5r8;

Object.defineProperty(C, "name", {
  value: "C"
});

const _D_member_initializers_4qnqo = [];

class __D_alc2l8 extends C {
  constructor() {
    super();
    _D_member_initializers_4qnqo.forEach(initialize => initialize.call(this));
  }
  get p() {}
}

const _D_p_descriptor_g2gj = Object.getOwnPropertyDescriptor(__D_alc2l8.prototype, "p");

_D_p_descriptor_g2gj.get = addProperty("c", 3)(_D_p_descriptor_g2gj.get, {
  kind: "getter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(__D_alc2l8.prototype, "public", "p"),
  addInitializer: initializer => _D_member_initializers_4qnqo.push(initializer)
}) ?? _D_p_descriptor_g2gj.get;

Object.defineProperty(__D_alc2l8.prototype, "p", _D_p_descriptor_g2gj);

const _D_p_descriptor_m5acag = Object.getOwnPropertyDescriptor(__D_alc2l8.prototype, "p");

_D_p_descriptor_m5acag.get = addProperty("d", 4)(_D_p_descriptor_m5acag.get, {
  kind: "getter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(__D_alc2l8.prototype, "public", "p"),
  addInitializer: initializer => _D_member_initializers_4qnqo.push(initializer)
}) ?? _D_p_descriptor_m5acag.get;

Object.defineProperty(__D_alc2l8.prototype, "p", _D_p_descriptor_m5acag);

let D = __D_alc2l8;

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