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

let _C_p_initializer_i2a5j;

const _C_member_initializers_7gfpl = [];

let _C_p_initializer_0oa5t8;

class C {
  constructor() {
    this.z = 100;
    _C_member_initializers_7gfpl.forEach(initialize => initialize.call(this));
  }
  #_p_private_property_geh0n = _C_p_initializer_0oa5t8.call(this, _C_p_initializer_i2a5j.call(this, 1));
  get p() {
    return this.#_p_private_property_geh0n;
  }
  set p(v) {
    this.#_p_private_property_geh0n = v;
  }
}

const _C_p_descriptor_j4ou1 = Object.getOwnPropertyDescriptor(C.prototype, "p");

const _C_p_result_1k98og = addProperty("a", 1)({
  get: _C_p_descriptor_j4ou1.get,
  set: _C_p_descriptor_j4ou1.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(C.prototype, "public", "p"),
  addInitializer: initializer => _C_member_initializers_7gfpl.push(initializer)
}) || {};

_C_p_initializer_0oa5t8 = _C_p_result_1k98og.initialize || (v => v);

Object.defineProperty(C.prototype, "p", {
  get: _C_p_result_1k98og.get || _C_p_descriptor_j4ou1.get,
  set: _C_p_result_1k98og.set || _C_p_descriptor_j4ou1.set
});

const _C_p_descriptor_k0b8s = Object.getOwnPropertyDescriptor(C.prototype, "p");

const _C_p_result_i98uf8 = addProperty("b", 2)({
  get: _C_p_descriptor_k0b8s.get,
  set: _C_p_descriptor_k0b8s.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(C.prototype, "public", "p"),
  addInitializer: initializer => _C_member_initializers_7gfpl.push(initializer)
}) || {};

_C_p_initializer_i2a5j = _C_p_result_i98uf8.initialize || (v => v);

Object.defineProperty(C.prototype, "p", {
  get: _C_p_result_i98uf8.get || _C_p_descriptor_k0b8s.get,
  set: _C_p_result_i98uf8.set || _C_p_descriptor_k0b8s.set
});

let _D_p_initializer_mqutj8;

const _D_member_initializers_sauh9g = [];

let _D_p_initializer_fpekrg;

class D extends C {
  constructor() {
    super();
    _D_member_initializers_sauh9g.forEach(initialize => initialize.call(this));
  }
  #_p_private_property_olr3no = _D_p_initializer_fpekrg.call(this, _D_p_initializer_mqutj8.call(this, 2));
  get p() {
    return this.#_p_private_property_olr3no;
  }
  set p(v) {
    this.#_p_private_property_olr3no = v;
  }
}

const _D_p_descriptor_9dm3ko = Object.getOwnPropertyDescriptor(D.prototype, "p");

const _D_p_result_qboij8 = addProperty("c", 3)({
  get: _D_p_descriptor_9dm3ko.get,
  set: _D_p_descriptor_9dm3ko.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(D.prototype, "public", "p"),
  addInitializer: initializer => _D_member_initializers_sauh9g.push(initializer)
}) || {};

_D_p_initializer_fpekrg = _D_p_result_qboij8.initialize || (v => v);

Object.defineProperty(D.prototype, "p", {
  get: _D_p_result_qboij8.get || _D_p_descriptor_9dm3ko.get,
  set: _D_p_result_qboij8.set || _D_p_descriptor_9dm3ko.set
});

const _D_p_descriptor_ksf93 = Object.getOwnPropertyDescriptor(D.prototype, "p");

const _D_p_result_5s6j8o = addProperty("d", 4)({
  get: _D_p_descriptor_ksf93.get,
  set: _D_p_descriptor_ksf93.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(D.prototype, "public", "p"),
  addInitializer: initializer => _D_member_initializers_sauh9g.push(initializer)
}) || {};

_D_p_initializer_mqutj8 = _D_p_result_5s6j8o.initialize || (v => v);

Object.defineProperty(D.prototype, "p", {
  get: _D_p_result_5s6j8o.get || _D_p_descriptor_ksf93.get,
  set: _D_p_result_5s6j8o.set || _D_p_descriptor_ksf93.set
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