function addProperty(key, value) {
  return (klass, context) => {
    if (context.kind === "field" && context.addInitializer) {
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

let _C_p_initializer_ccrjno;

const _C_member_initializers_8cr9pg = [];

let _C_p_initializer_184o2g;

class __C_4em9u {
  constructor() {
    this.z = 100;
    _C_member_initializers_8cr9pg.forEach(initialize => initialize.call(this));
  }
  p = _C_p_initializer_184o2g.call(this, _C_p_initializer_ccrjno.call(this, 1));
}

_C_p_initializer_184o2g = addProperty("a", 1)(undefined, {
  kind: "field",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(__C_4em9u.prototype, "public", "p"),
  addInitializer: initializer => _C_member_initializers_8cr9pg.push(initializer)
}) ?? (v => v);

_C_p_initializer_ccrjno = addProperty("b", 2)(undefined, {
  kind: "field",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(__C_4em9u.prototype, "public", "p"),
  addInitializer: initializer => _C_member_initializers_8cr9pg.push(initializer)
}) ?? (v => v);

let C = __C_4em9u;

Object.defineProperty(C, "name", {
  value: "C"
});

let _D_p_initializer_epdlso;

const _D_member_initializers_uivgk8 = [];

let _D_p_initializer_9s459;

class __D_gvmnoo extends C {
  constructor() {
    super();
    _D_member_initializers_uivgk8.forEach(initialize => initialize.call(this));
  }
  p = _D_p_initializer_9s459.call(this, _D_p_initializer_epdlso.call(this, 2));
}

_D_p_initializer_9s459 = addProperty("c", 3)(undefined, {
  kind: "field",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(__D_gvmnoo.prototype, "public", "p"),
  addInitializer: initializer => _D_member_initializers_uivgk8.push(initializer)
}) ?? (v => v);

_D_p_initializer_epdlso = addProperty("d", 4)(undefined, {
  kind: "field",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(__D_gvmnoo.prototype, "public", "p"),
  addInitializer: initializer => _D_member_initializers_uivgk8.push(initializer)
}) ?? (v => v);

let D = __D_gvmnoo;

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