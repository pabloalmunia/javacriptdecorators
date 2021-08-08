function addProperty(key, value) {
  return (klass, context) => {
    if (context.kind === "auto-accessor" && context.addInitializer) {
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

let _C_p_initializer_d94av8;

const _C_member_initializers_krk858 = [];

let _C_p_initializer_0ob9b;

class C {
  constructor() {
    this.z = 100;
    _C_member_initializers_krk858.forEach(initialize => initialize.call(this));
  }
  #_p_private_property_pvb33 = _C_p_initializer_0ob9b.call(this, _C_p_initializer_d94av8.call(this, 1));
  get p() {
    return this.#_p_private_property_pvb33;
  }
  set p(v) {
    this.#_p_private_property_pvb33 = v;
  }
}

const _C_p_descriptor_n42038 = Object.getOwnPropertyDescriptor(C.prototype, "p");

const _C_p_result_1k0m7g = addProperty("a", 1)({
  get: _C_p_descriptor_n42038.get,
  set: _C_p_descriptor_n42038.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(C.prototype, "public", "p"),
  addInitializer: initializer => _C_member_initializers_krk858.push(initializer)
}) || {};

_C_p_initializer_0ob9b = _C_p_result_1k0m7g.initialize || (v => v);

Object.defineProperty(C.prototype, "p", {
  get: _C_p_result_1k0m7g.get || _C_p_descriptor_n42038.get,
  set: _C_p_result_1k0m7g.set || _C_p_descriptor_n42038.set
});

const _C_p_descriptor_d7mm = Object.getOwnPropertyDescriptor(C.prototype, "p");

const _C_p_result_e54jt = addProperty("b", 2)({
  get: _C_p_descriptor_d7mm.get,
  set: _C_p_descriptor_d7mm.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(C.prototype, "public", "p"),
  addInitializer: initializer => _C_member_initializers_krk858.push(initializer)
}) || {};

_C_p_initializer_d94av8 = _C_p_result_e54jt.initialize || (v => v);

Object.defineProperty(C.prototype, "p", {
  get: _C_p_result_e54jt.get || _C_p_descriptor_d7mm.get,
  set: _C_p_result_e54jt.set || _C_p_descriptor_d7mm.set
});

let _D_p_initializer_3ivm3g;

const _D_member_initializers_95a3r8 = [];

let _D_p_initializer_12corg;

class D extends C {
  constructor() {
    super();
    _D_member_initializers_95a3r8.forEach(initialize => initialize.call(this));
  }
  #_p_private_property_d40t1 = _D_p_initializer_12corg.call(this, _D_p_initializer_3ivm3g.call(this, 2));
  get p() {
    return this.#_p_private_property_d40t1;
  }
  set p(v) {
    this.#_p_private_property_d40t1 = v;
  }
}

const _D_p_descriptor_7akiv = Object.getOwnPropertyDescriptor(D.prototype, "p");

const _D_p_result_8d2uio = addProperty("c", 3)({
  get: _D_p_descriptor_7akiv.get,
  set: _D_p_descriptor_7akiv.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(D.prototype, "public", "p"),
  addInitializer: initializer => _D_member_initializers_95a3r8.push(initializer)
}) || {};

_D_p_initializer_12corg = _D_p_result_8d2uio.initialize || (v => v);

Object.defineProperty(D.prototype, "p", {
  get: _D_p_result_8d2uio.get || _D_p_descriptor_7akiv.get,
  set: _D_p_result_8d2uio.set || _D_p_descriptor_7akiv.set
});

const _D_p_descriptor_eoaa8g = Object.getOwnPropertyDescriptor(D.prototype, "p");

const _D_p_result_am25s8 = addProperty("d", 4)({
  get: _D_p_descriptor_eoaa8g.get,
  set: _D_p_descriptor_eoaa8g.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(D.prototype, "public", "p"),
  addInitializer: initializer => _D_member_initializers_95a3r8.push(initializer)
}) || {};

_D_p_initializer_3ivm3g = _D_p_result_am25s8.initialize || (v => v);

Object.defineProperty(D.prototype, "p", {
  get: _D_p_result_am25s8.get || _D_p_descriptor_eoaa8g.get,
  set: _D_p_result_am25s8.set || _D_p_descriptor_eoaa8g.set
});

const c = new C();

console.assert(c.p === 1);

console.assert(c.a === 1);

console.assert(c.b === 2);

console.assert(c.c === undefined);

console.assert(c.d === undefined);

const d = new D();

console.assert(d.p === 2);

console.assert(d.a === 1);

console.assert(d.b === 2);

console.assert(d.c === 3);

console.assert(d.d === 4);