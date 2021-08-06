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

const _C_p_get_symbol_hjuht = Symbol();

const _C_p_set_symbol_a9jd68 = Symbol();

let _C_p_getter_bk8q5o;

let _C_p_setter_nopa6;

let _C_p_initializer_6mbovo;

let _C_p_initializer_cb7f6;

class C {
  #_p_private_property_p9vkoo = _C_p_initializer_cb7f6.call(this, _C_p_initializer_6mbovo.call(this, 1));
  get #p() {
    return _C_p_getter_bk8q5o.call(this);
  }
  set #p(v) {
    return _C_p_setter_nopa6.call(this, v);
  }
  static _C_p_getter_bk8q5o() {
    return this.#_p_private_property_p9vkoo;
  }
  static _C_p_setter_nopa6(v) {
    this.#_p_private_property_p9vkoo = v;
  }
  [_C_p_get_symbol_hjuht]() {
    return this.#p;
  }
  [_C_p_set_symbol_a9jd68](v) {
    this.#p = v;
  }
  get check() {
    return this.#p;
  }
}

_C_p_getter_bk8q5o = C._C_p_getter_bk8q5o;

_C_p_setter_nopa6 = C._C_p_setter_nopa6;

delete C._C_p_getter_bk8q5o;

delete C._C_p_setter_nopa6;

const _C_p_result_j5gbog = decorator1({
  get: _C_p_getter_bk8q5o,
  set: _C_p_setter_nopa6
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C.prototype[_C_p_get_symbol_hjuht],
    set: C.prototype[_C_p_set_symbol_a9jd68]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", undefined)
}) || {};

_C_p_initializer_cb7f6 = _C_p_result_j5gbog.initialize || (v => v);

_C_p_getter_bk8q5o = _C_p_result_j5gbog.get || _C_p_getter_bk8q5o;

_C_p_setter_nopa6 = _C_p_result_j5gbog.set || _C_p_setter_nopa6;

const _C_p_result_69pjd = decorator2({
  get: _C_p_getter_bk8q5o,
  set: _C_p_setter_nopa6
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C.prototype[_C_p_get_symbol_hjuht],
    set: C.prototype[_C_p_set_symbol_a9jd68]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", undefined)
}) || {};

_C_p_initializer_6mbovo = _C_p_result_69pjd.initialize || (v => v);

_C_p_getter_bk8q5o = _C_p_result_69pjd.get || _C_p_getter_bk8q5o;

_C_p_setter_nopa6 = _C_p_result_69pjd.set || _C_p_setter_nopa6;

const c = new C();

console.assert(c.check === 6);