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

let _C_p_initializer_38hac8;

const _C_member_initializers_7522tg = [];

let _C_p_initializer_pbrob;

class C {
  constructor() {
    this.z = 100;
    _C_member_initializers_7522tg.forEach(initialize => initialize.call(this));
  }
  #_p_private_property_u4f168 = _C_p_initializer_pbrob.call(this, _C_p_initializer_38hac8.call(this, 1));
  get p() {
    return this.#_p_private_property_u4f168;
  }
  set p(v) {
    this.#_p_private_property_u4f168 = v;
  }
}

const _C_p_descriptor_r8bdv8 = Object.getOwnPropertyDescriptor(C.prototype, "p");

const _C_p_result_5r6g1o = addProperty("a", 1)({
  get: _C_p_descriptor_r8bdv8.get,
  set: _C_p_descriptor_r8bdv8.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(C.prototype, "public", "p"),
  addInitializer: initializer => _C_member_initializers_7522tg.push(initializer)
}) || {};

_C_p_initializer_pbrob = _C_p_result_5r6g1o.initialize || (v => v);

Object.defineProperty(C.prototype, "p", {
  get: _C_p_result_5r6g1o.get || _C_p_descriptor_r8bdv8.get,
  set: _C_p_result_5r6g1o.set || _C_p_descriptor_r8bdv8.set
});

const _C_p_descriptor_lrrvvg = Object.getOwnPropertyDescriptor(C.prototype, "p");

const _C_p_result_bgtj4g = addProperty("b", 2)({
  get: _C_p_descriptor_lrrvvg.get,
  set: _C_p_descriptor_lrrvvg.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(C.prototype, "public", "p"),
  addInitializer: initializer => _C_member_initializers_7522tg.push(initializer)
}) || {};

_C_p_initializer_38hac8 = _C_p_result_bgtj4g.initialize || (v => v);

Object.defineProperty(C.prototype, "p", {
  get: _C_p_result_bgtj4g.get || _C_p_descriptor_lrrvvg.get,
  set: _C_p_result_bgtj4g.set || _C_p_descriptor_lrrvvg.set
});

let _D_p_initializer_cv324;

const _D_member_initializers_c8asi = [];

let _D_p_initializer_uote5o;

class D extends C {
  constructor() {
    super();
    _D_member_initializers_c8asi.forEach(initialize => initialize.call(this));
  }
  #_p_private_property_uun5d8 = _D_p_initializer_uote5o.call(this, _D_p_initializer_cv324.call(this, 2));
  get p() {
    return this.#_p_private_property_uun5d8;
  }
  set p(v) {
    this.#_p_private_property_uun5d8 = v;
  }
}

const _D_p_descriptor_ovmbm = Object.getOwnPropertyDescriptor(D.prototype, "p");

const _D_p_result_5jnado = addProperty("c", 3)({
  get: _D_p_descriptor_ovmbm.get,
  set: _D_p_descriptor_ovmbm.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(D.prototype, "public", "p"),
  addInitializer: initializer => _D_member_initializers_c8asi.push(initializer)
}) || {};

_D_p_initializer_uote5o = _D_p_result_5jnado.initialize || (v => v);

Object.defineProperty(D.prototype, "p", {
  get: _D_p_result_5jnado.get || _D_p_descriptor_ovmbm.get,
  set: _D_p_result_5jnado.set || _D_p_descriptor_ovmbm.set
});

const _D_p_descriptor_2n8it8 = Object.getOwnPropertyDescriptor(D.prototype, "p");

const _D_p_result_nsb3mo = addProperty("d", 4)({
  get: _D_p_descriptor_2n8it8.get,
  set: _D_p_descriptor_2n8it8.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(D.prototype, "public", "p"),
  addInitializer: initializer => _D_member_initializers_c8asi.push(initializer)
}) || {};

_D_p_initializer_cv324 = _D_p_result_nsb3mo.initialize || (v => v);

Object.defineProperty(D.prototype, "p", {
  get: _D_p_result_nsb3mo.get || _D_p_descriptor_2n8it8.get,
  set: _D_p_result_nsb3mo.set || _D_p_descriptor_2n8it8.set
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