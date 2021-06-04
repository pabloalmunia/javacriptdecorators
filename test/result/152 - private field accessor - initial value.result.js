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
      for (let proto = obj; proto; proto = Object.getPrototypeOf(proto)) {
        if (Object.hasOwnProperty.call(proto, key)) {
          return obj[key] = Object.create(proto[key]);
        }
      }
      obj[key] = Object.create(null);
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

const _C_p_get_symbol_tij1go = Symbol();

const _C_p_set_symbol_86p628 = Symbol();

let _C_p_getter_nq777o;

let _C_p_setter_a35mlg;

let _C_p_initializer_c3r8ko;

class C {
  #_p_private_property_mvnavo = _C_p_initializer_c3r8ko.call(this, 10);
  get #p() {
    return _C_p_getter_nq777o.call(this);
  }
  set #p(v) {
    return _C_p_setter_a35mlg.call(this, v);
  }
  static _C_p_getter_nq777o() {
    return this.#_p_private_property_mvnavo;
  }
  static _C_p_setter_a35mlg(v) {
    this.#_p_private_property_mvnavo = v;
  }
  [_C_p_get_symbol_tij1go]() {
    return this.#p;
  }
  [_C_p_set_symbol_86p628](v) {
    this.#p = v;
  }
  get check() {
    return this.#p;
  }
}

_C_p_getter_nq777o = C._C_p_getter_nq777o;

_C_p_setter_a35mlg = C._C_p_setter_a35mlg;

delete C._C_p_getter_nq777o;

delete C._C_p_setter_a35mlg;

const _C_p_result_fanm8g = decorator({
  get: _C_p_getter_nq777o,
  set: _C_p_setter_a35mlg
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C.prototype[_C_p_get_symbol_tij1go],
    set: C.prototype[_C_p_set_symbol_86p628]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", undefined)
}) || {};

_C_p_initializer_c3r8ko = _C_p_result_fanm8g.initialize || (v => v);

_C_p_getter_nq777o = _C_p_result_fanm8g.get || _C_p_getter_nq777o;

_C_p_setter_a35mlg = _C_p_result_fanm8g.set || _C_p_setter_a35mlg;

const c = new C();

console.assert(c.check === 20);