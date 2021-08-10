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

let _C_p_initializer_ua52t;

const _C_member_initializers_tj9j6g = [];

let _C_p_initializer_uol3ho;

class __C_dkvcrg {
  constructor() {
    this.z = 100;
    _C_member_initializers_tj9j6g.forEach(initialize => initialize.call(this));
  }
  #_p_private_property_5ioar8 = _C_p_initializer_uol3ho.call(this, _C_p_initializer_ua52t.call(this, 1));
  get p() {
    return this.#_p_private_property_5ioar8;
  }
  set p(v) {
    this.#_p_private_property_5ioar8 = v;
  }
}

const ___C_dkvcrg_p_descriptor_d5meso = Object.getOwnPropertyDescriptor(__C_dkvcrg.prototype, "p");

const ___C_dkvcrg_p_result_7bafso = addProperty("a", 1)({
  get: ___C_dkvcrg_p_descriptor_d5meso.get,
  set: ___C_dkvcrg_p_descriptor_d5meso.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(__C_dkvcrg.prototype, "public", "p"),
  addInitializer: initializer => _C_member_initializers_tj9j6g.push(initializer)
}) || {};

_C_p_initializer_uol3ho = ___C_dkvcrg_p_result_7bafso.initialize || (v => v);

Object.defineProperty(__C_dkvcrg.prototype, "p", {
  get: ___C_dkvcrg_p_result_7bafso.get || ___C_dkvcrg_p_descriptor_d5meso.get,
  set: ___C_dkvcrg_p_result_7bafso.set || ___C_dkvcrg_p_descriptor_d5meso.set
});

const ___C_dkvcrg_p_descriptor_04r9rg = Object.getOwnPropertyDescriptor(__C_dkvcrg.prototype, "p");

const ___C_dkvcrg_p_result_5djreo = addProperty("b", 2)({
  get: ___C_dkvcrg_p_descriptor_04r9rg.get,
  set: ___C_dkvcrg_p_descriptor_04r9rg.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(__C_dkvcrg.prototype, "public", "p"),
  addInitializer: initializer => _C_member_initializers_tj9j6g.push(initializer)
}) || {};

_C_p_initializer_ua52t = ___C_dkvcrg_p_result_5djreo.initialize || (v => v);

Object.defineProperty(__C_dkvcrg.prototype, "p", {
  get: ___C_dkvcrg_p_result_5djreo.get || ___C_dkvcrg_p_descriptor_04r9rg.get,
  set: ___C_dkvcrg_p_result_5djreo.set || ___C_dkvcrg_p_descriptor_04r9rg.set
});

let C = __C_dkvcrg;

Object.defineProperty(C, "name", {
  value: "C"
});

let _D_p_initializer_j9lnpo;

const _D_member_initializers_0grico = [];

let _D_p_initializer_snnmmo;

class __D_cjo3n extends C {
  constructor() {
    super();
    _D_member_initializers_0grico.forEach(initialize => initialize.call(this));
  }
  #_p_private_property_f25egg = _D_p_initializer_snnmmo.call(this, _D_p_initializer_j9lnpo.call(this, 2));
  get p() {
    return this.#_p_private_property_f25egg;
  }
  set p(v) {
    this.#_p_private_property_f25egg = v;
  }
}

const ___D_cjo3n_p_descriptor_lcs82g = Object.getOwnPropertyDescriptor(__D_cjo3n.prototype, "p");

const ___D_cjo3n_p_result_diss4g = addProperty("c", 3)({
  get: ___D_cjo3n_p_descriptor_lcs82g.get,
  set: ___D_cjo3n_p_descriptor_lcs82g.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(__D_cjo3n.prototype, "public", "p"),
  addInitializer: initializer => _D_member_initializers_0grico.push(initializer)
}) || {};

_D_p_initializer_snnmmo = ___D_cjo3n_p_result_diss4g.initialize || (v => v);

Object.defineProperty(__D_cjo3n.prototype, "p", {
  get: ___D_cjo3n_p_result_diss4g.get || ___D_cjo3n_p_descriptor_lcs82g.get,
  set: ___D_cjo3n_p_result_diss4g.set || ___D_cjo3n_p_descriptor_lcs82g.set
});

const ___D_cjo3n_p_descriptor_3nh3fo = Object.getOwnPropertyDescriptor(__D_cjo3n.prototype, "p");

const ___D_cjo3n_p_result_hm7b6g = addProperty("d", 4)({
  get: ___D_cjo3n_p_descriptor_3nh3fo.get,
  set: ___D_cjo3n_p_descriptor_3nh3fo.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(__D_cjo3n.prototype, "public", "p"),
  addInitializer: initializer => _D_member_initializers_0grico.push(initializer)
}) || {};

_D_p_initializer_j9lnpo = ___D_cjo3n_p_result_hm7b6g.initialize || (v => v);

Object.defineProperty(__D_cjo3n.prototype, "p", {
  get: ___D_cjo3n_p_result_hm7b6g.get || ___D_cjo3n_p_descriptor_3nh3fo.get,
  set: ___D_cjo3n_p_result_hm7b6g.set || ___D_cjo3n_p_descriptor_3nh3fo.set
});

let D = __D_cjo3n;

Object.defineProperty(D, "name", {
  value: "D"
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