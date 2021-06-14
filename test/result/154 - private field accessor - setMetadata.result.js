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

const _C_p_get_symbol_5de4 = Symbol();

const _C_p_set_symbol_772q1o = Symbol();

let _C_p_getter_gr46e8;

let _C_p_setter_9m4ldo;

let _C_p_initializer_q612ng;

let _C_p_initializer_uukj88;

class C {
  #_p_private_property_ais698 = _C_p_initializer_uukj88.call(this, _C_p_initializer_q612ng.call(this, 10));
  get #p() {
    return _C_p_getter_gr46e8.call(this);
  }
  set #p(v) {
    return _C_p_setter_9m4ldo.call(this, v);
  }
  static _C_p_getter_gr46e8() {
    return this.#_p_private_property_ais698;
  }
  static _C_p_setter_9m4ldo(v) {
    this.#_p_private_property_ais698 = v;
  }
  [_C_p_get_symbol_5de4]() {
    return this.#p;
  }
  [_C_p_set_symbol_772q1o](v) {
    this.#p = v;
  }
}

_C_p_getter_gr46e8 = C._C_p_getter_gr46e8;

_C_p_setter_9m4ldo = C._C_p_setter_9m4ldo;

delete C._C_p_getter_gr46e8;

delete C._C_p_setter_9m4ldo;

const _C_p_result_k455pg = decorator1({
  get: _C_p_getter_gr46e8,
  set: _C_p_setter_9m4ldo
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C.prototype[_C_p_get_symbol_5de4],
    set: C.prototype[_C_p_set_symbol_772q1o]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", undefined)
}) || {};

_C_p_initializer_uukj88 = _C_p_result_k455pg.initialize || (v => v);

_C_p_getter_gr46e8 = _C_p_result_k455pg.get || _C_p_getter_gr46e8;

_C_p_setter_9m4ldo = _C_p_result_k455pg.set || _C_p_setter_9m4ldo;

const _C_p_result_8lvtu = decorator2({
  get: _C_p_getter_gr46e8,
  set: _C_p_setter_9m4ldo
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C.prototype[_C_p_get_symbol_5de4],
    set: C.prototype[_C_p_set_symbol_772q1o]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", undefined)
}) || {};

_C_p_initializer_q612ng = _C_p_result_8lvtu.initialize || (v => v);

_C_p_getter_gr46e8 = _C_p_result_8lvtu.get || _C_p_getter_gr46e8;

_C_p_setter_9m4ldo = _C_p_result_8lvtu.set || _C_p_setter_9m4ldo;

const c = new C();

console.assert(C.prototype[Symbol.metadata][ONE].private[0] === 1);

console.assert(C.prototype[Symbol.metadata][TWO].private[0] === 2);