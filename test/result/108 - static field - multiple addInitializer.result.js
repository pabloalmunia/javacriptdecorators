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
  function createObjectWithPrototype(obj, key) {
    if (!Object.hasOwnProperty.call(obj, key)) {
      obj[key] = Object.create(obj[key] || null);
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

let _C_p_initializer_0naha8;

const _C_member_initializers_e0qm9 = [];

let _C_p_initializer_dbcl28;

class C {
  constructor() {
    this.z = 100;
    _C_member_initializers_e0qm9.forEach(initialize => initialize.call(this));
  }
  #_p_private_property_oggcog = _C_p_initializer_dbcl28.call(this, _C_p_initializer_0naha8.call(this, 1));
  get p() {
    return this.#_p_private_property_oggcog;
  }
  set p(v) {
    this.#_p_private_property_oggcog = v;
  }
}

const _C_p_descriptor_485c88 = Object.getOwnPropertyDescriptor(C.prototype, "p");

const _C_p_result_q0h4r8 = addProperty("a", 1)({
  get: _C_p_descriptor_485c88.get,
  set: _C_p_descriptor_485c88.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(C.prototype, "public", "p"),
  addInitializer: initializer => _C_member_initializers_e0qm9.push(initializer)
}) || {};

_C_p_initializer_dbcl28 = _C_p_result_q0h4r8.initialize || (v => v);

Object.defineProperty(C.prototype, "p", {
  get: _C_p_result_q0h4r8.get || _C_p_descriptor_485c88.get,
  set: _C_p_result_q0h4r8.set || _C_p_descriptor_485c88.set
});

const _C_p_descriptor_iuegug = Object.getOwnPropertyDescriptor(C.prototype, "p");

const _C_p_result_hq8eco = addProperty("b", 2)({
  get: _C_p_descriptor_iuegug.get,
  set: _C_p_descriptor_iuegug.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(C.prototype, "public", "p"),
  addInitializer: initializer => _C_member_initializers_e0qm9.push(initializer)
}) || {};

_C_p_initializer_0naha8 = _C_p_result_hq8eco.initialize || (v => v);

Object.defineProperty(C.prototype, "p", {
  get: _C_p_result_hq8eco.get || _C_p_descriptor_iuegug.get,
  set: _C_p_result_hq8eco.set || _C_p_descriptor_iuegug.set
});

let _D_p_initializer_edalc8;

const _D_member_initializers_aiqaig = [];

let _D_p_initializer_b0486o;

class D extends C {
  constructor() {
    super();
    _D_member_initializers_aiqaig.forEach(initialize => initialize.call(this));
  }
  #_p_private_property_vs0og8 = _D_p_initializer_b0486o.call(this, _D_p_initializer_edalc8.call(this, 2));
  get p() {
    return this.#_p_private_property_vs0og8;
  }
  set p(v) {
    this.#_p_private_property_vs0og8 = v;
  }
}

const _D_p_descriptor_88m87g = Object.getOwnPropertyDescriptor(D.prototype, "p");

const _D_p_result_f6p4n = addProperty("c", 3)({
  get: _D_p_descriptor_88m87g.get,
  set: _D_p_descriptor_88m87g.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(D.prototype, "public", "p"),
  addInitializer: initializer => _D_member_initializers_aiqaig.push(initializer)
}) || {};

_D_p_initializer_b0486o = _D_p_result_f6p4n.initialize || (v => v);

Object.defineProperty(D.prototype, "p", {
  get: _D_p_result_f6p4n.get || _D_p_descriptor_88m87g.get,
  set: _D_p_result_f6p4n.set || _D_p_descriptor_88m87g.set
});

const _D_p_descriptor_3eh8j = Object.getOwnPropertyDescriptor(D.prototype, "p");

const _D_p_result_cgsmk = addProperty("d", 4)({
  get: _D_p_descriptor_3eh8j.get,
  set: _D_p_descriptor_3eh8j.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(D.prototype, "public", "p"),
  addInitializer: initializer => _D_member_initializers_aiqaig.push(initializer)
}) || {};

_D_p_initializer_edalc8 = _D_p_result_cgsmk.initialize || (v => v);

Object.defineProperty(D.prototype, "p", {
  get: _D_p_result_cgsmk.get || _D_p_descriptor_3eh8j.get,
  set: _D_p_result_cgsmk.set || _D_p_descriptor_3eh8j.set
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