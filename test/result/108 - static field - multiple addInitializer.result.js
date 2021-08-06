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
  const createObjectWithPrototype = (obj, key) => Object.hasOwnProperty.call(obj, key) ? obj[key] : Object.create(obj[key] || {});
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

let _C_p_initializer_qtin58;

const _C_member_initializers_d2rpho = [];

let _C_p_initializer_safer8;

class C {
  constructor() {
    this.z = 100;
    _C_member_initializers_d2rpho.forEach(initialize => initialize.call(this));
  }
  #_p_private_property_44v11 = _C_p_initializer_safer8.call(this, _C_p_initializer_qtin58.call(this, 1));
  get p() {
    return this.#_p_private_property_44v11;
  }
  set p(v) {
    this.#_p_private_property_44v11 = v;
  }
}

const _C_p_descriptor_p3ovq8 = Object.getOwnPropertyDescriptor(C.prototype, "p");

const _C_p_result_p7cb38 = addProperty("a", 1)({
  get: _C_p_descriptor_p3ovq8.get,
  set: _C_p_descriptor_p3ovq8.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(C.prototype, "public", "p"),
  addInitializer: initializer => _C_member_initializers_d2rpho.push(initializer)
}) || {};

_C_p_initializer_safer8 = _C_p_result_p7cb38.initialize || (v => v);

Object.defineProperty(C.prototype, "p", {
  get: _C_p_result_p7cb38.get || _C_p_descriptor_p3ovq8.get,
  set: _C_p_result_p7cb38.set || _C_p_descriptor_p3ovq8.set
});

const _C_p_descriptor_f5nmp8 = Object.getOwnPropertyDescriptor(C.prototype, "p");

const _C_p_result_q7dplg = addProperty("b", 2)({
  get: _C_p_descriptor_f5nmp8.get,
  set: _C_p_descriptor_f5nmp8.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(C.prototype, "public", "p"),
  addInitializer: initializer => _C_member_initializers_d2rpho.push(initializer)
}) || {};

_C_p_initializer_qtin58 = _C_p_result_q7dplg.initialize || (v => v);

Object.defineProperty(C.prototype, "p", {
  get: _C_p_result_q7dplg.get || _C_p_descriptor_f5nmp8.get,
  set: _C_p_result_q7dplg.set || _C_p_descriptor_f5nmp8.set
});

let _D_p_initializer_8shl8o;

const _D_member_initializers_r3jprg = [];

let _D_p_initializer_cpqpsg;

class D extends C {
  constructor() {
    super();
    _D_member_initializers_r3jprg.forEach(initialize => initialize.call(this));
  }
  #_p_private_property_gr7pt8 = _D_p_initializer_cpqpsg.call(this, _D_p_initializer_8shl8o.call(this, 2));
  get p() {
    return this.#_p_private_property_gr7pt8;
  }
  set p(v) {
    this.#_p_private_property_gr7pt8 = v;
  }
}

const _D_p_descriptor_deksl8 = Object.getOwnPropertyDescriptor(D.prototype, "p");

const _D_p_result_3k01m8 = addProperty("c", 3)({
  get: _D_p_descriptor_deksl8.get,
  set: _D_p_descriptor_deksl8.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(D.prototype, "public", "p"),
  addInitializer: initializer => _D_member_initializers_r3jprg.push(initializer)
}) || {};

_D_p_initializer_cpqpsg = _D_p_result_3k01m8.initialize || (v => v);

Object.defineProperty(D.prototype, "p", {
  get: _D_p_result_3k01m8.get || _D_p_descriptor_deksl8.get,
  set: _D_p_result_3k01m8.set || _D_p_descriptor_deksl8.set
});

const _D_p_descriptor_lvksl = Object.getOwnPropertyDescriptor(D.prototype, "p");

const _D_p_result_7iruqo = addProperty("d", 4)({
  get: _D_p_descriptor_lvksl.get,
  set: _D_p_descriptor_lvksl.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(D.prototype, "public", "p"),
  addInitializer: initializer => _D_member_initializers_r3jprg.push(initializer)
}) || {};

_D_p_initializer_8shl8o = _D_p_result_7iruqo.initialize || (v => v);

Object.defineProperty(D.prototype, "p", {
  get: _D_p_result_7iruqo.get || _D_p_descriptor_lvksl.get,
  set: _D_p_result_7iruqo.set || _D_p_descriptor_lvksl.set
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