const ONE = Symbol();

const TWO = Symbol();

function decorator1(value, context) {
  context.setMetadata(ONE, 1);
}

function decorator2(value, context) {
  context.setMetadata(TWO, 2);
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

const _C_p_get_symbol_pbcatg = Symbol();

const _C_p_set_symbol_459bag = Symbol();

let _C_p_getter_0fdsa8;

let _C_p_setter_epbggg;

let _C_p_initializer_rqgkfo;

let _C_p_initializer_9rkkj;

class __C_a40uc {
  #_p_private_property_06c2b = _C_p_initializer_9rkkj.call(this, _C_p_initializer_rqgkfo.call(this, 10));
  get #p() {
    return _C_p_getter_0fdsa8.call(this);
  }
  set #p(v) {
    return _C_p_setter_epbggg.call(this, v);
  }
  static _C_p_getter_0fdsa8() {
    return this.#_p_private_property_06c2b;
  }
  static _C_p_setter_epbggg(v) {
    this.#_p_private_property_06c2b = v;
  }
  [_C_p_get_symbol_pbcatg]() {
    return this.#p;
  }
  [_C_p_set_symbol_459bag](v) {
    this.#p = v;
  }
}

_C_p_getter_0fdsa8 = __C_a40uc._C_p_getter_0fdsa8;

_C_p_setter_epbggg = __C_a40uc._C_p_setter_epbggg;

delete __C_a40uc._C_p_getter_0fdsa8;

delete __C_a40uc._C_p_setter_epbggg;

const _C_p_result_n63tk = decorator1({
  get: _C_p_getter_0fdsa8,
  set: _C_p_setter_epbggg
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: __C_a40uc.prototype[_C_p_get_symbol_pbcatg],
    set: __C_a40uc.prototype[_C_p_set_symbol_459bag]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(__C_a40uc.prototype, "private", "#p")
}) || {};

_C_p_initializer_9rkkj = _C_p_result_n63tk.initialize || (v => v);

_C_p_getter_0fdsa8 = _C_p_result_n63tk.get || _C_p_getter_0fdsa8;

_C_p_setter_epbggg = _C_p_result_n63tk.set || _C_p_setter_epbggg;

const _C_p_result_d7tbg = decorator2({
  get: _C_p_getter_0fdsa8,
  set: _C_p_setter_epbggg
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: __C_a40uc.prototype[_C_p_get_symbol_pbcatg],
    set: __C_a40uc.prototype[_C_p_set_symbol_459bag]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(__C_a40uc.prototype, "private", "#p")
}) || {};

_C_p_initializer_rqgkfo = _C_p_result_d7tbg.initialize || (v => v);

_C_p_getter_0fdsa8 = _C_p_result_d7tbg.get || _C_p_getter_0fdsa8;

_C_p_setter_epbggg = _C_p_result_d7tbg.set || _C_p_setter_epbggg;

let C = __C_a40uc;

Object.defineProperty(C, "name", {
  value: "C"
});

const c = new C();

console.assert(C.prototype[Symbol.metadata][ONE].private[0] === 1);

console.assert(C.prototype[Symbol.metadata][TWO].private[0] === 2);