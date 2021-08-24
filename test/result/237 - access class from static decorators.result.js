const result = [];

function getClass(klass) {
  result.push(klass.name);
  return function(value, context) {};
}

try {
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
  const _A_b_symbol_69ita8 = Symbol();
  const _A_c_get_symbol_k2i878 = Symbol();
  const _A_c_set_symbol_0ksa68 = Symbol();
  const _A_a_get_symbol_g4kp78 = Symbol();
  const _A_a_set_symbol_fjbjs8 = Symbol();
  let _A_a_getter_fl4m;
  let _A_a_setter_ob2hc;
  let _A_a_initializer_4cpq3;
  class A {
    static #_a_private_property_5op71g = 1;
    static get a() {
      return this.#_a_private_property_5op71g;
    }
    static set a(v) {
      this.#_a_private_property_5op71g = v;
    }
    static b() {}
    static c = 1;
    static #_a_private_property_t0gt38 = 1;
    static get #a() {
      return _A_a_getter_fl4m.call(this);
    }
    static set #a(v) {
      return _A_a_setter_ob2hc.call(this, v);
    }
    static _A_a_getter_fl4m() {
      return this.#_a_private_property_t0gt38;
    }
    static _A_a_setter_ob2hc(v) {
      this.#_a_private_property_t0gt38 = v;
    }
    static [_A_a_get_symbol_g4kp78]() {
      return A.#a;
    }
    static [_A_a_set_symbol_fjbjs8](v) {
      A.#a = v;
    }
    static _A_b_temp_3mopl() {}
    static [_A_b_symbol_69ita8] = getClass(A)(A._A_b_temp_3mopl, {
      kind: "method",
      name: "#b",
      isStatic: true,
      isPrivate: true,
      access: {
        get: A[_A_b_symbol_69ita8]
      },
      ...__PrepareMetadata(A, "private", "#b")
    }) ?? A._A_b_temp_3mopl;
    static #b = A[_A_b_symbol_69ita8];
    static [_A_b_symbol_69ita8]() {
      return this.#b;
    }
    static #c = 1;
    static [_A_c_get_symbol_k2i878]() {
      return A.#c;
    }
    static [_A_c_set_symbol_0ksa68](v) {
      A.#c = v;
    }
  }
  const _A_a_descriptor_6iokpo = Object.getOwnPropertyDescriptor(A, "a");
  const _A_a_result_ap0kj = getClass(A)({
    get: _A_a_descriptor_6iokpo.get,
    set: _A_a_descriptor_6iokpo.set
  }, {
    kind: "auto-accessor",
    name: "a",
    isStatic: true,
    isPrivate: false,
    ...__PrepareMetadata(A, "public", "a")
  }) || {};
  _A_a_initializer_4cpq3 = _A_a_result_ap0kj.initialize || (v => v);
  Object.defineProperty(A, "a", {
    get: _A_a_result_ap0kj.get || _A_a_descriptor_6iokpo.get,
    set: _A_a_result_ap0kj.set || _A_a_descriptor_6iokpo.set
  });
  _A_a_descriptor_6iokpo.set.call(A, _A_a_initializer_4cpq3(_A_a_descriptor_6iokpo.get.call(A)));
  const _A_a_initializer_ppt4oo = {
    get: A._A_a_getter_fl4m,
    set: A._A_a_setter_ob2hc
  };
  _A_a_getter_fl4m = A._A_a_getter_fl4m;
  _A_a_setter_ob2hc = A._A_a_setter_ob2hc;
  delete A._A_a_getter_fl4m;
  delete A._A_a_setter_ob2hc;
  const _A_a_result_e5e608 = getClass(A)({
    get: _A_a_getter_fl4m,
    set: _A_a_setter_ob2hc
  }, {
    kind: "auto-accessor",
    name: "#a",
    access: {
      get: A[_A_a_get_symbol_g4kp78],
      set: A[_A_a_set_symbol_fjbjs8]
    },
    isStatic: true,
    isPrivate: true,
    ...__PrepareMetadata(A, "private", "#a")
  }) || {};
  _A_a_initializer_ppt4oo.set.call(
    A,
    (_A_a_result_e5e608.initialize || (v => v))(_A_a_initializer_ppt4oo.get.call(A))
  );
  _A_a_getter_fl4m = _A_a_result_e5e608.get || _A_a_getter_fl4m;
  _A_a_setter_ob2hc = _A_a_result_e5e608.set || _A_a_setter_ob2hc;
  const _A_c_initializer_lp261o = getClass(A)(undefined, {
    kind: "field",
    name: "#c",
    access: {
      get: A[_A_c_get_symbol_k2i878],
      set: A[_A_c_set_symbol_0ksa68]
    },
    isStatic: true,
    isPrivate: true,
    ...__PrepareMetadata(A, "private", "c")
  }) ?? (v => v);
  A[_A_c_set_symbol_0ksa68](_A_c_initializer_lp261o(A[_A_c_get_symbol_k2i878]()));
  delete A._A_b_temp_3mopl;
  A = getClass(A)(A, {
    kind: "class",
    name: "A",
    ...__PrepareMetadata(A, "constructor", undefined)
  }) ?? A;
  const _A_c_initializer_1q9npg = getClass(A)(undefined, {
    kind: "field",
    name: "c",
    isStatic: true,
    isPrivate: false,
    ...__PrepareMetadata(A, "public", "c")
  }) ?? (v => v);
  A.c = _A_c_initializer_1q9npg.call(A, A.c);
  A.b = getClass(A)(A.b, {
    kind: "method",
    name: "b",
    isStatic: true,
    isPrivate: false,
    ...__PrepareMetadata(A, "public", "b")
  }) ?? A.b;
  console.assert(result.length === 7);
  console.assert(result[0] === "A");
  console.assert(result[1] === "A");
  console.assert(result[2] === "A");
  console.assert(result[3] === "A");
  console.assert(result[4] === "A");
  console.assert(result[5] === "A");
  console.assert(result[6] === "A");
} catch (e) {
  console.assert(false);
}