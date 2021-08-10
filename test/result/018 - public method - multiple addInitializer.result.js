function addProperty(key, value) {
  return (klass, context) => {
    if (context.kind === "method" && context.addInitializer) {
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

const _C_member_initializers_ebg5o = [];

class __C_smhc7 {
  constructor() {
    this.z = 100;
    _C_member_initializers_ebg5o.forEach(initialize => initialize.call(this));
  }
  m() {}
}

__C_smhc7.prototype.m = addProperty("a", 1)(__C_smhc7.prototype.m, {
  kind: "method",
  name: "m",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(__C_smhc7.prototype, "public", "m"),
  addInitializer: initializer => _C_member_initializers_ebg5o.push(initializer)
}) ?? __C_smhc7.prototype.m;

__C_smhc7.prototype.m = addProperty("b", 2)(__C_smhc7.prototype.m, {
  kind: "method",
  name: "m",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(__C_smhc7.prototype, "public", "m"),
  addInitializer: initializer => _C_member_initializers_ebg5o.push(initializer)
}) ?? __C_smhc7.prototype.m;

let C = __C_smhc7;

Object.defineProperty(C, "name", {
  value: "C"
});

const _D_member_initializers_g7tjno = [];

class __D_0ctjso extends C {
  constructor() {
    super();
    _D_member_initializers_g7tjno.forEach(initialize => initialize.call(this));
  }
  m() {}
}

__D_0ctjso.prototype.m = addProperty("c", 3)(__D_0ctjso.prototype.m, {
  kind: "method",
  name: "m",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(__D_0ctjso.prototype, "public", "m"),
  addInitializer: initializer => _D_member_initializers_g7tjno.push(initializer)
}) ?? __D_0ctjso.prototype.m;

__D_0ctjso.prototype.m = addProperty("d", 4)(__D_0ctjso.prototype.m, {
  kind: "method",
  name: "m",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(__D_0ctjso.prototype, "public", "m"),
  addInitializer: initializer => _D_member_initializers_g7tjno.push(initializer)
}) ?? __D_0ctjso.prototype.m;

let D = __D_0ctjso;

Object.defineProperty(D, "name", {
  value: "D"
});

const c = new C();

console.assert(c.a === 1);

console.assert(c.b === 2);

console.assert(c.c === undefined);

console.assert(c.d === undefined);

const d = new D();

console.assert(d.a === 1);

console.assert(d.b === 2);

console.assert(d.c === 3);

console.assert(d.d === 4);