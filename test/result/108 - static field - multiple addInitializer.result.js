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

let _C_p_initializer_ltblso;

const _C_member_initializers_srjq68 = [];

let _C_p_initializer_eiq4l8;

class C {
  constructor() {
    this.z = 100;
    _C_member_initializers_srjq68.forEach(initialize => initialize.call(this));
  }
  #_p_private_property_nc30lg = _C_p_initializer_eiq4l8.call(this, _C_p_initializer_ltblso.call(this, 1));
  get p() {
    return this.#_p_private_property_nc30lg;
  }
  set p(v) {
    this.#_p_private_property_nc30lg = v;
  }
}

const _C_p_descriptor_65fc5o = Object.getOwnPropertyDescriptor(C.prototype, "p");

const _C_p_result_h36ah = addProperty("a", 1)({
  get: _C_p_descriptor_65fc5o.get,
  set: _C_p_descriptor_65fc5o.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(C.prototype, "public", "p"),
  addInitializer: initializer => _C_member_initializers_srjq68.push(initializer)
}) || {};

_C_p_initializer_eiq4l8 = _C_p_result_h36ah.initialize || (v => v);

Object.defineProperty(C.prototype, "p", {
  get: _C_p_result_h36ah.get || _C_p_descriptor_65fc5o.get,
  set: _C_p_result_h36ah.set || _C_p_descriptor_65fc5o.set
});

const _C_p_descriptor_slvl78 = Object.getOwnPropertyDescriptor(C.prototype, "p");

const _C_p_result_1h3lug = addProperty("b", 2)({
  get: _C_p_descriptor_slvl78.get,
  set: _C_p_descriptor_slvl78.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(C.prototype, "public", "p"),
  addInitializer: initializer => _C_member_initializers_srjq68.push(initializer)
}) || {};

_C_p_initializer_ltblso = _C_p_result_1h3lug.initialize || (v => v);

Object.defineProperty(C.prototype, "p", {
  get: _C_p_result_1h3lug.get || _C_p_descriptor_slvl78.get,
  set: _C_p_result_1h3lug.set || _C_p_descriptor_slvl78.set
});

let _D_p_initializer_638rgo;

const _D_member_initializers_07b7l8 = [];

let _D_p_initializer_j9ob1o;

class D extends C {
  constructor() {
    super();
    _D_member_initializers_07b7l8.forEach(initialize => initialize.call(this));
  }
  #_p_private_property_v7atug = _D_p_initializer_j9ob1o.call(this, _D_p_initializer_638rgo.call(this, 2));
  get p() {
    return this.#_p_private_property_v7atug;
  }
  set p(v) {
    this.#_p_private_property_v7atug = v;
  }
}

const _D_p_descriptor_dhdd4o = Object.getOwnPropertyDescriptor(D.prototype, "p");

const _D_p_result_8d0e08 = addProperty("c", 3)({
  get: _D_p_descriptor_dhdd4o.get,
  set: _D_p_descriptor_dhdd4o.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(D.prototype, "public", "p"),
  addInitializer: initializer => _D_member_initializers_07b7l8.push(initializer)
}) || {};

_D_p_initializer_j9ob1o = _D_p_result_8d0e08.initialize || (v => v);

Object.defineProperty(D.prototype, "p", {
  get: _D_p_result_8d0e08.get || _D_p_descriptor_dhdd4o.get,
  set: _D_p_result_8d0e08.set || _D_p_descriptor_dhdd4o.set
});

const _D_p_descriptor_8u6tn = Object.getOwnPropertyDescriptor(D.prototype, "p");

const _D_p_result_mmhfo = addProperty("d", 4)({
  get: _D_p_descriptor_8u6tn.get,
  set: _D_p_descriptor_8u6tn.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(D.prototype, "public", "p"),
  addInitializer: initializer => _D_member_initializers_07b7l8.push(initializer)
}) || {};

_D_p_initializer_638rgo = _D_p_result_mmhfo.initialize || (v => v);

Object.defineProperty(D.prototype, "p", {
  get: _D_p_result_mmhfo.get || _D_p_descriptor_8u6tn.get,
  set: _D_p_result_mmhfo.set || _D_p_descriptor_8u6tn.set
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