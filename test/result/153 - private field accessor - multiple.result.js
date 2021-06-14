function decorator1(value, context) {
  if (context.kind === "auto-accessor") {
    return {
      initialize(v) {
        return v * 2;
      }
    };
  }
}

function decorator2(value, context) {
  if (context.kind === "auto-accessor") {
    return {
      initialize(v) {
        return v * 3;
      }
    };
  }
}

if (!Symbol.metadata) {
  Symbol.metadata = Symbol("Symbol.metadata");
}

const __metadataPrivate = new WeakMap();

function __PrepareMetadata(base, kind, property) {
  const createObjectWithPrototype = (obj, key) => Object.hasOwnProperty.call(obj, key) ? obj[key] : Object.create(obj[key] || null);
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
      base[Symbol.metadata] = createObjectWithPrototype(base, Symbol.metadata);
      base[Symbol.metadata][key] = createObjectWithPrototype(base[Symbol.metadata], key);
      base[Symbol.metadata][key].public = createObjectWithPrototype(base[Symbol.metadata][key], "public");
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

const _C_p_get_symbol_heilo = Symbol();

const _C_p_set_symbol_2lvss = Symbol();

let _C_p_getter_ad1te;

let _C_p_setter_3tuhr8;

let _C_p_initializer_u5u0gg;

let _C_p_initializer_4o48gg;

class C {
  #_p_private_property_t7komg = _C_p_initializer_4o48gg.call(this, _C_p_initializer_u5u0gg.call(this, 1));
  get #p() {
    return _C_p_getter_ad1te.call(this);
  }
  set #p(v) {
    return _C_p_setter_3tuhr8.call(this, v);
  }
  static _C_p_getter_ad1te() {
    return this.#_p_private_property_t7komg;
  }
  static _C_p_setter_3tuhr8(v) {
    this.#_p_private_property_t7komg = v;
  }
  [_C_p_get_symbol_heilo]() {
    return this.#p;
  }
  [_C_p_set_symbol_2lvss](v) {
    this.#p = v;
  }
  get check() {
    return this.#p;
  }
}

_C_p_getter_ad1te = C._C_p_getter_ad1te;

_C_p_setter_3tuhr8 = C._C_p_setter_3tuhr8;

delete C._C_p_getter_ad1te;

delete C._C_p_setter_3tuhr8;

const _C_p_result_dd405o = decorator1({
  get: _C_p_getter_ad1te,
  set: _C_p_setter_3tuhr8
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C.prototype[_C_p_get_symbol_heilo],
    set: C.prototype[_C_p_set_symbol_2lvss]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", undefined)
}) || {};

_C_p_initializer_4o48gg = _C_p_result_dd405o.initialize || (v => v);

_C_p_getter_ad1te = _C_p_result_dd405o.get || _C_p_getter_ad1te;

_C_p_setter_3tuhr8 = _C_p_result_dd405o.set || _C_p_setter_3tuhr8;

const _C_p_result_jpq5to = decorator2({
  get: _C_p_getter_ad1te,
  set: _C_p_setter_3tuhr8
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C.prototype[_C_p_get_symbol_heilo],
    set: C.prototype[_C_p_set_symbol_2lvss]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", undefined)
}) || {};

_C_p_initializer_u5u0gg = _C_p_result_jpq5to.initialize || (v => v);

_C_p_getter_ad1te = _C_p_result_jpq5to.get || _C_p_getter_ad1te;

_C_p_setter_3tuhr8 = _C_p_result_jpq5to.set || _C_p_setter_3tuhr8;

const c = new C();

console.assert(c.check === 6);