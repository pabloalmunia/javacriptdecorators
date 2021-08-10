function decorator(value, context) {
  console.assert(context.kind === "auto-accessor");
  console.assert(context.name === "#p");
  console.assert(typeof context.setMetadata === "function");
  console.assert(typeof context.getMetadata === "function");
  console.assert(context.isPrivate);
  console.assert(context.isStatic);
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

const _A_p_get_symbol_1scrig = Symbol();

const _A_p_set_symbol_o2g9r8 = Symbol();

let _A_p_getter_2v4fa;

let _A_p_setter_guoup;

class __A_vj61fg {
  static #_p_private_property_5d26c = 1;
  static get #p() {
    return _A_p_getter_2v4fa.call(this);
  }
  static set #p(v) {
    return _A_p_setter_guoup.call(this, v);
  }
  static _A_p_getter_2v4fa() {
    return this.#_p_private_property_5d26c;
  }
  static _A_p_setter_guoup(v) {
    this.#_p_private_property_5d26c = v;
  }
  static [_A_p_get_symbol_1scrig]() {
    return __A_vj61fg.#p;
  }
  static [_A_p_set_symbol_o2g9r8](v) {
    __A_vj61fg.#p = v;
  }
}

const _A_p_initializer_6dd5g = {
  get: __A_vj61fg._A_p_getter_2v4fa,
  set: __A_vj61fg._A_p_setter_guoup
};

_A_p_getter_2v4fa = __A_vj61fg._A_p_getter_2v4fa;

_A_p_setter_guoup = __A_vj61fg._A_p_setter_guoup;

delete __A_vj61fg._A_p_getter_2v4fa;

delete __A_vj61fg._A_p_setter_guoup;

const _A_p_result_v84iq = decorator({
  get: _A_p_getter_2v4fa,
  set: _A_p_setter_guoup
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: __A_vj61fg[_A_p_get_symbol_1scrig],
    set: __A_vj61fg[_A_p_set_symbol_o2g9r8]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(__A_vj61fg, "private", "#p")
}) || {};

_A_p_initializer_6dd5g.set.call(
  __A_vj61fg,
  (_A_p_result_v84iq.initialize || (v => v))(_A_p_initializer_6dd5g.get.call(__A_vj61fg))
);

_A_p_getter_2v4fa = _A_p_result_v84iq.get || _A_p_getter_2v4fa;

_A_p_setter_guoup = _A_p_result_v84iq.set || _A_p_setter_guoup;

let A = __A_vj61fg;

Object.defineProperty(A, "name", {
  value: "A"
});