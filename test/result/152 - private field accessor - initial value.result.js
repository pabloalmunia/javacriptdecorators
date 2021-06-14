function decorator(context) {
  return {
    initialize(v) {
      return v * 2;
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

const _C_p_get_symbol_h4svlo = Symbol();

const _C_p_set_symbol_bmnuao = Symbol();

let _C_p_getter_1bl3mg;

let _C_p_setter_v9bfr;

let _C_p_initializer_69rr0g;

class C {
  #_p_private_property_n1eukg = _C_p_initializer_69rr0g.call(this, 10);
  get #p() {
    return _C_p_getter_1bl3mg.call(this);
  }
  set #p(v) {
    return _C_p_setter_v9bfr.call(this, v);
  }
  static _C_p_getter_1bl3mg() {
    return this.#_p_private_property_n1eukg;
  }
  static _C_p_setter_v9bfr(v) {
    this.#_p_private_property_n1eukg = v;
  }
  [_C_p_get_symbol_h4svlo]() {
    return this.#p;
  }
  [_C_p_set_symbol_bmnuao](v) {
    this.#p = v;
  }
  get check() {
    return this.#p;
  }
}

_C_p_getter_1bl3mg = C._C_p_getter_1bl3mg;

_C_p_setter_v9bfr = C._C_p_setter_v9bfr;

delete C._C_p_getter_1bl3mg;

delete C._C_p_setter_v9bfr;

const _C_p_result_p5b64o = decorator({
  get: _C_p_getter_1bl3mg,
  set: _C_p_setter_v9bfr
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C.prototype[_C_p_get_symbol_h4svlo],
    set: C.prototype[_C_p_set_symbol_bmnuao]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", undefined)
}) || {};

_C_p_initializer_69rr0g = _C_p_result_p5b64o.initialize || (v => v);

_C_p_getter_1bl3mg = _C_p_result_p5b64o.get || _C_p_getter_1bl3mg;

_C_p_setter_v9bfr = _C_p_result_p5b64o.set || _C_p_setter_v9bfr;

const c = new C();

console.assert(c.check === 20);