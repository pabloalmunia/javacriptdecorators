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

const _C_p_get_symbol_845udo = Symbol();

const _C_p_set_symbol_irbnn = Symbol();

let _C_p_getter_oariu8;

let _C_p_setter_7d3m2o;

let _C_p_initializer_h5k26g;

let _C_p_initializer_sp4d48;

class C {
  #_p_private_property_vlebb = _C_p_initializer_sp4d48.call(this, _C_p_initializer_h5k26g.call(this, 1));
  get #p() {
    return _C_p_getter_oariu8.call(this);
  }
  set #p(v) {
    return _C_p_setter_7d3m2o.call(this, v);
  }
  static _C_p_getter_oariu8() {
    return this.#_p_private_property_vlebb;
  }
  static _C_p_setter_7d3m2o(v) {
    this.#_p_private_property_vlebb = v;
  }
  [_C_p_get_symbol_845udo]() {
    return this.#p;
  }
  [_C_p_set_symbol_irbnn](v) {
    this.#p = v;
  }
  get check() {
    return this.#p;
  }
}

_C_p_getter_oariu8 = C._C_p_getter_oariu8;

_C_p_setter_7d3m2o = C._C_p_setter_7d3m2o;

delete C._C_p_getter_oariu8;

delete C._C_p_setter_7d3m2o;

const _C_p_result_sahqf = decorator1({
  get: _C_p_getter_oariu8,
  set: _C_p_setter_7d3m2o
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C.prototype[_C_p_get_symbol_845udo],
    set: C.prototype[_C_p_set_symbol_irbnn]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", "#p")
}) || {};

_C_p_initializer_sp4d48 = _C_p_result_sahqf.initialize || (v => v);

_C_p_getter_oariu8 = _C_p_result_sahqf.get || _C_p_getter_oariu8;

_C_p_setter_7d3m2o = _C_p_result_sahqf.set || _C_p_setter_7d3m2o;

const _C_p_result_61a5q = decorator2({
  get: _C_p_getter_oariu8,
  set: _C_p_setter_7d3m2o
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C.prototype[_C_p_get_symbol_845udo],
    set: C.prototype[_C_p_set_symbol_irbnn]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", "#p")
}) || {};

_C_p_initializer_h5k26g = _C_p_result_61a5q.initialize || (v => v);

_C_p_getter_oariu8 = _C_p_result_61a5q.get || _C_p_getter_oariu8;

_C_p_setter_7d3m2o = _C_p_result_61a5q.set || _C_p_setter_7d3m2o;

const c = new C();

console.assert(c.check === 6);