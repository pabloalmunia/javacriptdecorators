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

let _C_p_initializer_t4bfq8;

const _C_member_initializers_1onua8 = [];

let _C_p_initializer_2ej4h8;

class C {
  constructor() {
    this.z = 100;
    _C_member_initializers_1onua8.forEach(initialize => initialize.call(this));
  }
  #_p_private_property_lgvcl = _C_p_initializer_2ej4h8.call(this, _C_p_initializer_t4bfq8.call(this, 1));
  get p() {
    return this.#_p_private_property_lgvcl;
  }
  set p(v) {
    this.#_p_private_property_lgvcl = v;
  }
}

const _C_p_descriptor_99gv4 = Object.getOwnPropertyDescriptor(C.prototype, "p");

const _C_p_result_cmm628 = addProperty("a", 1)({
  get: _C_p_descriptor_99gv4.get,
  set: _C_p_descriptor_99gv4.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(C.prototype, "public", "p"),
  addInitializer: initializer => _C_member_initializers_1onua8.push(initializer)
}) || {};

_C_p_initializer_2ej4h8 = _C_p_result_cmm628.initialize || (v => v);

Object.defineProperty(C.prototype, "p", {
  get: _C_p_result_cmm628.get || _C_p_descriptor_99gv4.get,
  set: _C_p_result_cmm628.set || _C_p_descriptor_99gv4.set
});

const _C_p_descriptor_lpt6t = Object.getOwnPropertyDescriptor(C.prototype, "p");

const _C_p_result_qfvq18 = addProperty("b", 2)({
  get: _C_p_descriptor_lpt6t.get,
  set: _C_p_descriptor_lpt6t.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(C.prototype, "public", "p"),
  addInitializer: initializer => _C_member_initializers_1onua8.push(initializer)
}) || {};

_C_p_initializer_t4bfq8 = _C_p_result_qfvq18.initialize || (v => v);

Object.defineProperty(C.prototype, "p", {
  get: _C_p_result_qfvq18.get || _C_p_descriptor_lpt6t.get,
  set: _C_p_result_qfvq18.set || _C_p_descriptor_lpt6t.set
});

let _D_p_initializer_3559qg;

const _D_member_initializers_danreg = [];

let _D_p_initializer_pse5ho;

class D extends C {
  constructor() {
    super();
    _D_member_initializers_danreg.forEach(initialize => initialize.call(this));
  }
  #_p_private_property_pr42i8 = _D_p_initializer_pse5ho.call(this, _D_p_initializer_3559qg.call(this, 2));
  get p() {
    return this.#_p_private_property_pr42i8;
  }
  set p(v) {
    this.#_p_private_property_pr42i8 = v;
  }
}

const _D_p_descriptor_hp6h4 = Object.getOwnPropertyDescriptor(D.prototype, "p");

const _D_p_result_859co = addProperty("c", 3)({
  get: _D_p_descriptor_hp6h4.get,
  set: _D_p_descriptor_hp6h4.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(D.prototype, "public", "p"),
  addInitializer: initializer => _D_member_initializers_danreg.push(initializer)
}) || {};

_D_p_initializer_pse5ho = _D_p_result_859co.initialize || (v => v);

Object.defineProperty(D.prototype, "p", {
  get: _D_p_result_859co.get || _D_p_descriptor_hp6h4.get,
  set: _D_p_result_859co.set || _D_p_descriptor_hp6h4.set
});

const _D_p_descriptor_vh1ppg = Object.getOwnPropertyDescriptor(D.prototype, "p");

const _D_p_result_ukrgag = addProperty("d", 4)({
  get: _D_p_descriptor_vh1ppg.get,
  set: _D_p_descriptor_vh1ppg.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(D.prototype, "public", "p"),
  addInitializer: initializer => _D_member_initializers_danreg.push(initializer)
}) || {};

_D_p_initializer_3559qg = _D_p_result_ukrgag.initialize || (v => v);

Object.defineProperty(D.prototype, "p", {
  get: _D_p_result_ukrgag.get || _D_p_descriptor_vh1ppg.get,
  set: _D_p_result_ukrgag.set || _D_p_descriptor_vh1ppg.set
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