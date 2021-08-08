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

const _C_p_get_symbol_vknv3 = Symbol();

const _C_p_set_symbol_ivc9uo = Symbol();

let _C_p_getter_9c6p0o;

let _C_p_setter_77obp8;

let _C_p_initializer_ikojrg;

class C {
  #_p_private_property_0df1fo = _C_p_initializer_ikojrg.call(this, 10);
  get #p() {
    return _C_p_getter_9c6p0o.call(this);
  }
  set #p(v) {
    return _C_p_setter_77obp8.call(this, v);
  }
  static _C_p_getter_9c6p0o() {
    return this.#_p_private_property_0df1fo;
  }
  static _C_p_setter_77obp8(v) {
    this.#_p_private_property_0df1fo = v;
  }
  [_C_p_get_symbol_vknv3]() {
    return this.#p;
  }
  [_C_p_set_symbol_ivc9uo](v) {
    this.#p = v;
  }
  get check() {
    return this.#p;
  }
}

_C_p_getter_9c6p0o = C._C_p_getter_9c6p0o;

_C_p_setter_77obp8 = C._C_p_setter_77obp8;

delete C._C_p_getter_9c6p0o;

delete C._C_p_setter_77obp8;

const _C_p_result_hn1nlo = decorator({
  get: _C_p_getter_9c6p0o,
  set: _C_p_setter_77obp8
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C.prototype[_C_p_get_symbol_vknv3],
    set: C.prototype[_C_p_set_symbol_ivc9uo]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", "#p")
}) || {};

_C_p_initializer_ikojrg = _C_p_result_hn1nlo.initialize || (v => v);

_C_p_getter_9c6p0o = _C_p_result_hn1nlo.get || _C_p_getter_9c6p0o;

_C_p_setter_77obp8 = _C_p_result_hn1nlo.set || _C_p_setter_77obp8;

const c = new C();

console.assert(c.check === 20);