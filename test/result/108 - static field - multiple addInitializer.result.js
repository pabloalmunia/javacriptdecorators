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

let _C_p_initializer_g74q48;

const _C_member_initializers_pcjc6 = [];

let _C_p_initializer_fl306;

class C {
  constructor() {
    this.z = 100;
    _C_member_initializers_pcjc6.forEach(initialize => initialize.call(this));
  }
  #_p_private_property_j7mpio = _C_p_initializer_fl306.call(this, _C_p_initializer_g74q48.call(this, 1));
  get p() {
    return this.#_p_private_property_j7mpio;
  }
  set p(v) {
    this.#_p_private_property_j7mpio = v;
  }
}

const _C_p_descriptor_debf5g = Object.getOwnPropertyDescriptor(C.prototype, "p");

const _C_p_result_9gsgd = addProperty("a", 1)({
  get: _C_p_descriptor_debf5g.get,
  set: _C_p_descriptor_debf5g.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(C.prototype, "public", "p"),
  addInitializer: initializer => _C_member_initializers_pcjc6.push(initializer)
}) || {};

_C_p_initializer_fl306 = _C_p_result_9gsgd.initialize || (v => v);

Object.defineProperty(C.prototype, "p", {
  get: _C_p_result_9gsgd.get || _C_p_descriptor_debf5g.get,
  set: _C_p_result_9gsgd.set || _C_p_descriptor_debf5g.set
});

const _C_p_descriptor_9njaog = Object.getOwnPropertyDescriptor(C.prototype, "p");

const _C_p_result_cl1s5g = addProperty("b", 2)({
  get: _C_p_descriptor_9njaog.get,
  set: _C_p_descriptor_9njaog.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(C.prototype, "public", "p"),
  addInitializer: initializer => _C_member_initializers_pcjc6.push(initializer)
}) || {};

_C_p_initializer_g74q48 = _C_p_result_cl1s5g.initialize || (v => v);

Object.defineProperty(C.prototype, "p", {
  get: _C_p_result_cl1s5g.get || _C_p_descriptor_9njaog.get,
  set: _C_p_result_cl1s5g.set || _C_p_descriptor_9njaog.set
});

let _D_p_initializer_btvke;

const _D_member_initializers_h4p9bg = [];

let _D_p_initializer_gn42ag;

class D extends C {
  constructor() {
    super();
    _D_member_initializers_h4p9bg.forEach(initialize => initialize.call(this));
  }
  #_p_private_property_3f3ruo = _D_p_initializer_gn42ag.call(this, _D_p_initializer_btvke.call(this, 2));
  get p() {
    return this.#_p_private_property_3f3ruo;
  }
  set p(v) {
    this.#_p_private_property_3f3ruo = v;
  }
}

const _D_p_descriptor_8ur12g = Object.getOwnPropertyDescriptor(D.prototype, "p");

const _D_p_result_ad1m38 = addProperty("c", 3)({
  get: _D_p_descriptor_8ur12g.get,
  set: _D_p_descriptor_8ur12g.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(D.prototype, "public", "p"),
  addInitializer: initializer => _D_member_initializers_h4p9bg.push(initializer)
}) || {};

_D_p_initializer_gn42ag = _D_p_result_ad1m38.initialize || (v => v);

Object.defineProperty(D.prototype, "p", {
  get: _D_p_result_ad1m38.get || _D_p_descriptor_8ur12g.get,
  set: _D_p_result_ad1m38.set || _D_p_descriptor_8ur12g.set
});

const _D_p_descriptor_u732e = Object.getOwnPropertyDescriptor(D.prototype, "p");

const _D_p_result_126iso = addProperty("d", 4)({
  get: _D_p_descriptor_u732e.get,
  set: _D_p_descriptor_u732e.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(D.prototype, "public", "p"),
  addInitializer: initializer => _D_member_initializers_h4p9bg.push(initializer)
}) || {};

_D_p_initializer_btvke = _D_p_result_126iso.initialize || (v => v);

Object.defineProperty(D.prototype, "p", {
  get: _D_p_result_126iso.get || _D_p_descriptor_u732e.get,
  set: _D_p_result_126iso.set || _D_p_descriptor_u732e.set
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