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
  const createObjectWithPrototype = (obj, key) => Object.hasOwnProperty.call(obj, key) ? obj[key] : Object.create(obj[key] || {});
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

const _C_p_get_symbol_pug2go = Symbol();

const _C_p_set_symbol_9evfig = Symbol();

let _C_p_getter_nbvn68;

let _C_p_setter_de235g;

class C {
  static #_p_private_property_os7sro = 10;
  static get #p() {
    return _C_p_getter_nbvn68.call(this);
  }
  static set #p(v) {
    return _C_p_setter_de235g.call(this, v);
  }
  static _C_p_getter_nbvn68() {
    return this.#_p_private_property_os7sro;
  }
  static _C_p_setter_de235g(v) {
    this.#_p_private_property_os7sro = v;
  }
  static [_C_p_get_symbol_pug2go]() {
    return C.#p;
  }
  static [_C_p_set_symbol_9evfig](v) {
    C.#p = v;
  }
  static get check() {
    return this.#p;
  }
}

const _C_p_initializer_mbjq3 = {
  get: C._C_p_getter_nbvn68,
  set: C._C_p_setter_de235g
};

_C_p_getter_nbvn68 = C._C_p_getter_nbvn68;

_C_p_setter_de235g = C._C_p_setter_de235g;

delete C._C_p_getter_nbvn68;

delete C._C_p_setter_de235g;

const _C_p_result_m1hbg8 = decorator({
  get: _C_p_getter_nbvn68,
  set: _C_p_setter_de235g
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C[_C_p_get_symbol_pug2go],
    set: C[_C_p_set_symbol_9evfig]
  },
  isStatic: true,
  isPrivate: true,
  ...__PrepareMetadata(C, "private", undefined)
}) || {};

_C_p_initializer_mbjq3.set.call(
  C,
  (_C_p_result_m1hbg8.initialize || (v => v))(_C_p_initializer_mbjq3.get.call(C))
);

_C_p_getter_nbvn68 = _C_p_result_m1hbg8.get || _C_p_getter_nbvn68;

_C_p_setter_de235g = _C_p_result_m1hbg8.set || _C_p_setter_de235g;

console.assert(C.check === 20);