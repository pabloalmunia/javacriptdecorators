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

let _C_p_initializer_s0nnr8;

const _C_member_initializers_ob7alo = [];

let _C_p_initializer_cc4m6;

class C {
  constructor() {
    this.z = 100;
    _C_member_initializers_ob7alo.forEach(initialize => initialize.call(this));
  }
  #_p_private_property_2dmi8o = _C_p_initializer_cc4m6.call(this, _C_p_initializer_s0nnr8.call(this, 1));
  get p() {
    return this.#_p_private_property_2dmi8o;
  }
  set p(v) {
    this.#_p_private_property_2dmi8o = v;
  }
}

const _C_p_descriptor_07848o = Object.getOwnPropertyDescriptor(C.prototype, "p");

const _C_p_result_2carh8 = addProperty("a", 1)({
  get: _C_p_descriptor_07848o.get,
  set: _C_p_descriptor_07848o.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(C.prototype, "public", "p"),
  addInitializer: initializer => _C_member_initializers_ob7alo.push(initializer)
}) || {};

_C_p_initializer_cc4m6 = _C_p_result_2carh8.initialize || (v => v);

Object.defineProperty(C.prototype, "p", {
  get: _C_p_result_2carh8.get || _C_p_descriptor_07848o.get,
  set: _C_p_result_2carh8.set || _C_p_descriptor_07848o.set
});

const _C_p_descriptor_4pshhg = Object.getOwnPropertyDescriptor(C.prototype, "p");

const _C_p_result_tndqog = addProperty("b", 2)({
  get: _C_p_descriptor_4pshhg.get,
  set: _C_p_descriptor_4pshhg.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(C.prototype, "public", "p"),
  addInitializer: initializer => _C_member_initializers_ob7alo.push(initializer)
}) || {};

_C_p_initializer_s0nnr8 = _C_p_result_tndqog.initialize || (v => v);

Object.defineProperty(C.prototype, "p", {
  get: _C_p_result_tndqog.get || _C_p_descriptor_4pshhg.get,
  set: _C_p_result_tndqog.set || _C_p_descriptor_4pshhg.set
});

let _D_p_initializer_phhcrg;

const _D_member_initializers_2rt1to = [];

let _D_p_initializer_jn83l;

class D extends C {
  constructor() {
    super();
    _D_member_initializers_2rt1to.forEach(initialize => initialize.call(this));
  }
  #_p_private_property_mvq9v8 = _D_p_initializer_jn83l.call(this, _D_p_initializer_phhcrg.call(this, 2));
  get p() {
    return this.#_p_private_property_mvq9v8;
  }
  set p(v) {
    this.#_p_private_property_mvq9v8 = v;
  }
}

const _D_p_descriptor_un2hso = Object.getOwnPropertyDescriptor(D.prototype, "p");

const _D_p_result_1mb5go = addProperty("c", 3)({
  get: _D_p_descriptor_un2hso.get,
  set: _D_p_descriptor_un2hso.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(D.prototype, "public", "p"),
  addInitializer: initializer => _D_member_initializers_2rt1to.push(initializer)
}) || {};

_D_p_initializer_jn83l = _D_p_result_1mb5go.initialize || (v => v);

Object.defineProperty(D.prototype, "p", {
  get: _D_p_result_1mb5go.get || _D_p_descriptor_un2hso.get,
  set: _D_p_result_1mb5go.set || _D_p_descriptor_un2hso.set
});

const _D_p_descriptor_ko05go = Object.getOwnPropertyDescriptor(D.prototype, "p");

const _D_p_result_f63cg8 = addProperty("d", 4)({
  get: _D_p_descriptor_ko05go.get,
  set: _D_p_descriptor_ko05go.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(D.prototype, "public", "p"),
  addInitializer: initializer => _D_member_initializers_2rt1to.push(initializer)
}) || {};

_D_p_initializer_phhcrg = _D_p_result_f63cg8.initialize || (v => v);

Object.defineProperty(D.prototype, "p", {
  get: _D_p_result_f63cg8.get || _D_p_descriptor_ko05go.get,
  set: _D_p_result_f63cg8.set || _D_p_descriptor_ko05go.set
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