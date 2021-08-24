function getClass(klass) {
  console.log(klass.name);
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
  let _A_a_initializer_q9sk0g;
  class A {
    #_a_private_property_2jik5g = _A_a_initializer_q9sk0g.call(this, 1);
    get a() {
      return this.#_a_private_property_2jik5g;
    }
    set a(v) {
      this.#_a_private_property_2jik5g = v;
    }
  }
  throw new ReferenceError("Cannot access 'A' before initialization");
  const _A_a_descriptor_tl07vo = Object.getOwnPropertyDescriptor(A.prototype, "a");
  const _A_a_result_qujepo = getClass(A)({
    get: _A_a_descriptor_tl07vo.get,
    set: _A_a_descriptor_tl07vo.set
  }, {
    kind: "auto-accessor",
    name: "a",
    isStatic: false,
    isPrivate: false,
    ...__PrepareMetadata(A.prototype, "public", "a")
  }) || {};
  _A_a_initializer_q9sk0g = _A_a_result_qujepo.initialize || (v => v);
  Object.defineProperty(A.prototype, "a", {
    get: _A_a_result_qujepo.get || _A_a_descriptor_tl07vo.get,
    set: _A_a_result_qujepo.set || _A_a_descriptor_tl07vo.set
  });
  console.assert(false);
} catch (e) {
  console.assert(e.message === "Cannot access 'A' before initialization");
}