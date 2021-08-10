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

const _C_p_get_symbol_nl68q = Symbol();

const _C_p_set_symbol_jte4to = Symbol();

const _C_static_initializers_kgjev8 = [];

class __C_burbk8 {
  static #p = 1;
  static [_C_p_get_symbol_nl68q]() {
    return __C_burbk8.#p;
  }
  static [_C_p_set_symbol_jte4to](v) {
    __C_burbk8.#p = v;
  }
}

const _C_p_initializer_12d1vg = addProperty("a", 1)(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: __C_burbk8[_C_p_get_symbol_nl68q],
    set: __C_burbk8[_C_p_set_symbol_jte4to]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(__C_burbk8, "private", "p"),
  addInitializer: initializer => _C_static_initializers_kgjev8.push(initializer)
}) ?? (v => v);

__C_burbk8[_C_p_set_symbol_jte4to](_C_p_initializer_12d1vg(__C_burbk8[_C_p_get_symbol_nl68q]()));

const _C_p_initializer_5eddno = addProperty("b", 2)(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: __C_burbk8[_C_p_get_symbol_nl68q],
    set: __C_burbk8[_C_p_set_symbol_jte4to]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(__C_burbk8, "private", "p"),
  addInitializer: initializer => _C_static_initializers_kgjev8.push(initializer)
}) ?? (v => v);

__C_burbk8[_C_p_set_symbol_jte4to](_C_p_initializer_5eddno(__C_burbk8[_C_p_get_symbol_nl68q]()));

let C = __C_burbk8;

Object.defineProperty(C, "name", {
  value: "C"
});

_C_static_initializers_kgjev8.forEach(initialize => initialize.call(C, C));

const _D_p_get_symbol_45pv2g = Symbol();

const _D_p_set_symbol_frt72g = Symbol();

const _D_static_initializers_4h15t = [];

class __D_f1r1s8 extends C {
  static #p = 2;
  static [_D_p_get_symbol_45pv2g]() {
    return __D_f1r1s8.#p;
  }
  static [_D_p_set_symbol_frt72g](v) {
    __D_f1r1s8.#p = v;
  }
}

const _D_p_initializer_qireu = addProperty("c", 3)(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: __D_f1r1s8[_D_p_get_symbol_45pv2g],
    set: __D_f1r1s8[_D_p_set_symbol_frt72g]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(__D_f1r1s8, "private", "p"),
  addInitializer: initializer => _D_static_initializers_4h15t.push(initializer)
}) ?? (v => v);

__D_f1r1s8[_D_p_set_symbol_frt72g](_D_p_initializer_qireu(__D_f1r1s8[_D_p_get_symbol_45pv2g]()));

const _D_p_initializer_iunfgg = addProperty("d", 4)(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: __D_f1r1s8[_D_p_get_symbol_45pv2g],
    set: __D_f1r1s8[_D_p_set_symbol_frt72g]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(__D_f1r1s8, "private", "p"),
  addInitializer: initializer => _D_static_initializers_4h15t.push(initializer)
}) ?? (v => v);

__D_f1r1s8[_D_p_set_symbol_frt72g](_D_p_initializer_iunfgg(__D_f1r1s8[_D_p_get_symbol_45pv2g]()));

let D = __D_f1r1s8;

Object.defineProperty(D, "name", {
  value: "D"
});

_D_static_initializers_4h15t.forEach(initialize => initialize.call(D, D));

console.assert(C.a === 1);

console.assert(C.b === 2);

console.assert(C.c === undefined);

console.assert(C.d === undefined);

console.assert(D.a === 1);

console.assert(D.b === 2);

console.assert(D.c === 3);

console.assert(D.d === 4);