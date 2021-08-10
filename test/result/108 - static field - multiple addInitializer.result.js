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

let _C_p_initializer_2bs9q8;

const _C_member_initializers_o720m = [];

let _C_p_initializer_7alm9g;

class __C_gogu3 {
  constructor() {
    this.z = 100;
    _C_member_initializers_o720m.forEach(initialize => initialize.call(this));
  }
  #_p_private_property_pgd9cg = _C_p_initializer_7alm9g.call(this, _C_p_initializer_2bs9q8.call(this, 1));
  get p() {
    return this.#_p_private_property_pgd9cg;
  }
  set p(v) {
    this.#_p_private_property_pgd9cg = v;
  }
}

const ___C_gogu3_p_descriptor_7ijhu = Object.getOwnPropertyDescriptor(__C_gogu3.prototype, "p");

const ___C_gogu3_p_result_ccbi58 = addProperty("a", 1)({
  get: ___C_gogu3_p_descriptor_7ijhu.get,
  set: ___C_gogu3_p_descriptor_7ijhu.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(__C_gogu3.prototype, "public", "p"),
  addInitializer: initializer => _C_member_initializers_o720m.push(initializer)
}) || {};

_C_p_initializer_7alm9g = ___C_gogu3_p_result_ccbi58.initialize || (v => v);

Object.defineProperty(__C_gogu3.prototype, "p", {
  get: ___C_gogu3_p_result_ccbi58.get || ___C_gogu3_p_descriptor_7ijhu.get,
  set: ___C_gogu3_p_result_ccbi58.set || ___C_gogu3_p_descriptor_7ijhu.set
});

const ___C_gogu3_p_descriptor_0flmi = Object.getOwnPropertyDescriptor(__C_gogu3.prototype, "p");

const ___C_gogu3_p_result_mesulo = addProperty("b", 2)({
  get: ___C_gogu3_p_descriptor_0flmi.get,
  set: ___C_gogu3_p_descriptor_0flmi.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(__C_gogu3.prototype, "public", "p"),
  addInitializer: initializer => _C_member_initializers_o720m.push(initializer)
}) || {};

_C_p_initializer_2bs9q8 = ___C_gogu3_p_result_mesulo.initialize || (v => v);

Object.defineProperty(__C_gogu3.prototype, "p", {
  get: ___C_gogu3_p_result_mesulo.get || ___C_gogu3_p_descriptor_0flmi.get,
  set: ___C_gogu3_p_result_mesulo.set || ___C_gogu3_p_descriptor_0flmi.set
});

let C = __C_gogu3;

Object.defineProperty(C, "name", {
  value: "C"
});

let _D_p_initializer_2gcjl8;

const _D_member_initializers_c07908 = [];

let _D_p_initializer_ujnjhg;

class __D_b7tgig extends C {
  constructor() {
    super();
    _D_member_initializers_c07908.forEach(initialize => initialize.call(this));
  }
  #_p_private_property_uara5 = _D_p_initializer_ujnjhg.call(this, _D_p_initializer_2gcjl8.call(this, 2));
  get p() {
    return this.#_p_private_property_uara5;
  }
  set p(v) {
    this.#_p_private_property_uara5 = v;
  }
}

const ___D_b7tgig_p_descriptor_4cb44g = Object.getOwnPropertyDescriptor(__D_b7tgig.prototype, "p");

const ___D_b7tgig_p_result_3tu4s8 = addProperty("c", 3)({
  get: ___D_b7tgig_p_descriptor_4cb44g.get,
  set: ___D_b7tgig_p_descriptor_4cb44g.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(__D_b7tgig.prototype, "public", "p"),
  addInitializer: initializer => _D_member_initializers_c07908.push(initializer)
}) || {};

_D_p_initializer_ujnjhg = ___D_b7tgig_p_result_3tu4s8.initialize || (v => v);

Object.defineProperty(__D_b7tgig.prototype, "p", {
  get: ___D_b7tgig_p_result_3tu4s8.get || ___D_b7tgig_p_descriptor_4cb44g.get,
  set: ___D_b7tgig_p_result_3tu4s8.set || ___D_b7tgig_p_descriptor_4cb44g.set
});

const ___D_b7tgig_p_descriptor_90jm4 = Object.getOwnPropertyDescriptor(__D_b7tgig.prototype, "p");

const ___D_b7tgig_p_result_bet0v = addProperty("d", 4)({
  get: ___D_b7tgig_p_descriptor_90jm4.get,
  set: ___D_b7tgig_p_descriptor_90jm4.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(__D_b7tgig.prototype, "public", "p"),
  addInitializer: initializer => _D_member_initializers_c07908.push(initializer)
}) || {};

_D_p_initializer_2gcjl8 = ___D_b7tgig_p_result_bet0v.initialize || (v => v);

Object.defineProperty(__D_b7tgig.prototype, "p", {
  get: ___D_b7tgig_p_result_bet0v.get || ___D_b7tgig_p_descriptor_90jm4.get,
  set: ___D_b7tgig_p_result_bet0v.set || ___D_b7tgig_p_descriptor_90jm4.set
});

let D = __D_b7tgig;

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