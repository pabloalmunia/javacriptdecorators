function decorator(value, context) {
  console.assert(context.kind === "auto-accessor");
  console.assert(context.name === "#p");
  console.assert(typeof context.setMetadata === "function");
  console.assert(typeof context.getMetadata === "function");
  console.assert(context.isPrivate);
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

const _A_p_get_symbol_cc851o = Symbol();

const _A_p_set_symbol_hubnr = Symbol();

let _A_p_getter_m7jqpo;

let _A_p_setter_c9cs78;

let _A_p_initializer_rp5ghg;

class __A_jdbg98 {
  #_p_private_property_29ns4 = _A_p_initializer_rp5ghg.call(this, 1);
  get #p() {
    return _A_p_getter_m7jqpo.call(this);
  }
  set #p(v) {
    return _A_p_setter_c9cs78.call(this, v);
  }
  static _A_p_getter_m7jqpo() {
    return this.#_p_private_property_29ns4;
  }
  static _A_p_setter_c9cs78(v) {
    this.#_p_private_property_29ns4 = v;
  }
  [_A_p_get_symbol_cc851o]() {
    return this.#p;
  }
  [_A_p_set_symbol_hubnr](v) {
    this.#p = v;
  }
}

_A_p_getter_m7jqpo = __A_jdbg98._A_p_getter_m7jqpo;

_A_p_setter_c9cs78 = __A_jdbg98._A_p_setter_c9cs78;

delete __A_jdbg98._A_p_getter_m7jqpo;

delete __A_jdbg98._A_p_setter_c9cs78;

const _A_p_result_78k16 = decorator({
  get: _A_p_getter_m7jqpo,
  set: _A_p_setter_c9cs78
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: __A_jdbg98.prototype[_A_p_get_symbol_cc851o],
    set: __A_jdbg98.prototype[_A_p_set_symbol_hubnr]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(__A_jdbg98.prototype, "private", "#p")
}) || {};

_A_p_initializer_rp5ghg = _A_p_result_78k16.initialize || (v => v);

_A_p_getter_m7jqpo = _A_p_result_78k16.get || _A_p_getter_m7jqpo;

_A_p_setter_c9cs78 = _A_p_result_78k16.set || _A_p_setter_c9cs78;

let A = __A_jdbg98;

Object.defineProperty(A, "name", {
  value: "A"
});