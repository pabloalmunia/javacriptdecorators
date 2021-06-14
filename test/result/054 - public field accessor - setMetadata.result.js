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
  const createObjectWithPrototype = (obj, key) => Object.hasOwnProperty.call(obj, key) ? obj[key] : Object.create(obj[key] || null);
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

let _C_p_initializer_tiunc;

let _C_p_initializer_n2esk8;

class C {
  #_p_private_property_lr4c7o = _C_p_initializer_n2esk8.call(this, _C_p_initializer_tiunc.call(this, 10));
  get p() {
    return this.#_p_private_property_lr4c7o;
  }
  set p(v) {
    this.#_p_private_property_lr4c7o = v;
  }
}

const _C_p_descriptor_880jf = Object.getOwnPropertyDescriptor(C.prototype, "p");

const _C_p_result_6f4q18 = decorator1({
  get: _C_p_descriptor_880jf.get,
  set: _C_p_descriptor_880jf.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(C.prototype, "public", "p")
}) || {};

_C_p_initializer_n2esk8 = _C_p_result_6f4q18.initialize || (v => v);

Object.defineProperty(C.prototype, "p", {
  get: _C_p_result_6f4q18.get || _C_p_descriptor_880jf.get,
  set: _C_p_result_6f4q18.set || _C_p_descriptor_880jf.set
});

const _C_p_descriptor_pb8df8 = Object.getOwnPropertyDescriptor(C.prototype, "p");

const _C_p_result_v3mni = decorator2({
  get: _C_p_descriptor_pb8df8.get,
  set: _C_p_descriptor_pb8df8.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(C.prototype, "public", "p")
}) || {};

_C_p_initializer_tiunc = _C_p_result_v3mni.initialize || (v => v);

Object.defineProperty(C.prototype, "p", {
  get: _C_p_result_v3mni.get || _C_p_descriptor_pb8df8.get,
  set: _C_p_result_v3mni.set || _C_p_descriptor_pb8df8.set
});

const c = new C();

console.assert(C.prototype[Symbol.metadata][ONE].public.p === 1);

console.assert(C.prototype[Symbol.metadata][TWO].public.p === 2);