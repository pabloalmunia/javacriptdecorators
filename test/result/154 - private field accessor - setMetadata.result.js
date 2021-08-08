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

const _C_p_get_symbol_c3q3m = Symbol();

const _C_p_set_symbol_k4n9u = Symbol();

let _C_p_getter_d0vrd8;

let _C_p_setter_fhmafg;

let _C_p_initializer_8mbjo8;

let _C_p_initializer_v2gilo;

class C {
  #_p_private_property_8o70h = _C_p_initializer_v2gilo.call(this, _C_p_initializer_8mbjo8.call(this, 10));
  get #p() {
    return _C_p_getter_d0vrd8.call(this);
  }
  set #p(v) {
    return _C_p_setter_fhmafg.call(this, v);
  }
  static _C_p_getter_d0vrd8() {
    return this.#_p_private_property_8o70h;
  }
  static _C_p_setter_fhmafg(v) {
    this.#_p_private_property_8o70h = v;
  }
  [_C_p_get_symbol_c3q3m]() {
    return this.#p;
  }
  [_C_p_set_symbol_k4n9u](v) {
    this.#p = v;
  }
}

_C_p_getter_d0vrd8 = C._C_p_getter_d0vrd8;

_C_p_setter_fhmafg = C._C_p_setter_fhmafg;

delete C._C_p_getter_d0vrd8;

delete C._C_p_setter_fhmafg;

const _C_p_result_er4o4 = decorator1({
  get: _C_p_getter_d0vrd8,
  set: _C_p_setter_fhmafg
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C.prototype[_C_p_get_symbol_c3q3m],
    set: C.prototype[_C_p_set_symbol_k4n9u]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", "#p")
}) || {};

_C_p_initializer_v2gilo = _C_p_result_er4o4.initialize || (v => v);

_C_p_getter_d0vrd8 = _C_p_result_er4o4.get || _C_p_getter_d0vrd8;

_C_p_setter_fhmafg = _C_p_result_er4o4.set || _C_p_setter_fhmafg;

const _C_p_result_n9on8g = decorator2({
  get: _C_p_getter_d0vrd8,
  set: _C_p_setter_fhmafg
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C.prototype[_C_p_get_symbol_c3q3m],
    set: C.prototype[_C_p_set_symbol_k4n9u]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", "#p")
}) || {};

_C_p_initializer_8mbjo8 = _C_p_result_n9on8g.initialize || (v => v);

_C_p_getter_d0vrd8 = _C_p_result_n9on8g.get || _C_p_getter_d0vrd8;

_C_p_setter_fhmafg = _C_p_result_n9on8g.set || _C_p_setter_fhmafg;

const c = new C();

console.assert(C.prototype[Symbol.metadata][ONE].private[0] === 1);

console.assert(C.prototype[Symbol.metadata][TWO].private[0] === 2);