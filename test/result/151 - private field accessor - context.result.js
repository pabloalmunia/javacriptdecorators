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

const _A_p_get_symbol_f001bo = Symbol();

const _A_p_set_symbol_q18chg = Symbol();

let _A_p_getter_bjhll;

let _A_p_setter_7v291g;

let _A_p_initializer_grrvlg;

class A {
  #_p_private_property_qklm7g = _A_p_initializer_grrvlg.call(this, 1);
  get #p() {
    return _A_p_getter_bjhll.call(this);
  }
  set #p(v) {
    return _A_p_setter_7v291g.call(this, v);
  }
  static _A_p_getter_bjhll() {
    return this.#_p_private_property_qklm7g;
  }
  static _A_p_setter_7v291g(v) {
    this.#_p_private_property_qklm7g = v;
  }
  [_A_p_get_symbol_f001bo]() {
    return this.#p;
  }
  [_A_p_set_symbol_q18chg](v) {
    this.#p = v;
  }
}

_A_p_getter_bjhll = A._A_p_getter_bjhll;

_A_p_setter_7v291g = A._A_p_setter_7v291g;

delete A._A_p_getter_bjhll;

delete A._A_p_setter_7v291g;

const _A_p_result_jad6rg = decorator({
  get: _A_p_getter_bjhll,
  set: _A_p_setter_7v291g
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: A.prototype[_A_p_get_symbol_f001bo],
    set: A.prototype[_A_p_set_symbol_q18chg]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(A.prototype, "private", "#p")
}) || {};

_A_p_initializer_grrvlg = _A_p_result_jad6rg.initialize || (v => v);

_A_p_getter_bjhll = _A_p_result_jad6rg.get || _A_p_getter_bjhll;

_A_p_setter_7v291g = _A_p_result_jad6rg.set || _A_p_setter_7v291g;