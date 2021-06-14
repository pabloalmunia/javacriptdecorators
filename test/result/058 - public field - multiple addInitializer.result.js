function addProperty(key, value) {
  return (klass, context) => {
    if (context.kind === "auto-accessor" && context.addInitializer) {
      context.addInitializer(function() {
        this[key] = value;
      });
    }
  };
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

let _C_p_initializer_kfj3vg;

const _C_member_initializers_6plojo = [];

let _C_p_initializer_brqf7g;

class C {
  constructor() {
    this.z = 100;
    _C_member_initializers_6plojo.forEach(initialize => initialize.call(this));
  }
  #_p_private_property_5uqvc8 = _C_p_initializer_brqf7g.call(this, _C_p_initializer_kfj3vg.call(this, 1));
  get p() {
    return this.#_p_private_property_5uqvc8;
  }
  set p(v) {
    this.#_p_private_property_5uqvc8 = v;
  }
}

const _C_p_descriptor_va63u = Object.getOwnPropertyDescriptor(C.prototype, "p");

const _C_p_result_1btr6 = addProperty("a", 1)({
  get: _C_p_descriptor_va63u.get,
  set: _C_p_descriptor_va63u.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(C.prototype, "public", "p"),
  addInitializer: initializer => _C_member_initializers_6plojo.push(initializer)
}) || {};

_C_p_initializer_brqf7g = _C_p_result_1btr6.initialize || (v => v);

Object.defineProperty(C.prototype, "p", {
  get: _C_p_result_1btr6.get || _C_p_descriptor_va63u.get,
  set: _C_p_result_1btr6.set || _C_p_descriptor_va63u.set
});

const _C_p_descriptor_j5f7sg = Object.getOwnPropertyDescriptor(C.prototype, "p");

const _C_p_result_ksvlj = addProperty("b", 2)({
  get: _C_p_descriptor_j5f7sg.get,
  set: _C_p_descriptor_j5f7sg.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(C.prototype, "public", "p"),
  addInitializer: initializer => _C_member_initializers_6plojo.push(initializer)
}) || {};

_C_p_initializer_kfj3vg = _C_p_result_ksvlj.initialize || (v => v);

Object.defineProperty(C.prototype, "p", {
  get: _C_p_result_ksvlj.get || _C_p_descriptor_j5f7sg.get,
  set: _C_p_result_ksvlj.set || _C_p_descriptor_j5f7sg.set
});

let _D_p_initializer_shhchg;

const _D_member_initializers_jqjdlo = [];

let _D_p_initializer_rnunk8;

class D extends C {
  constructor() {
    super();
    _D_member_initializers_jqjdlo.forEach(initialize => initialize.call(this));
  }
  #_p_private_property_lfqjm = _D_p_initializer_rnunk8.call(this, _D_p_initializer_shhchg.call(this, 2));
  get p() {
    return this.#_p_private_property_lfqjm;
  }
  set p(v) {
    this.#_p_private_property_lfqjm = v;
  }
}

const _D_p_descriptor_965mrg = Object.getOwnPropertyDescriptor(D.prototype, "p");

const _D_p_result_kmsqr8 = addProperty("c", 3)({
  get: _D_p_descriptor_965mrg.get,
  set: _D_p_descriptor_965mrg.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(D.prototype, "public", "p"),
  addInitializer: initializer => _D_member_initializers_jqjdlo.push(initializer)
}) || {};

_D_p_initializer_rnunk8 = _D_p_result_kmsqr8.initialize || (v => v);

Object.defineProperty(D.prototype, "p", {
  get: _D_p_result_kmsqr8.get || _D_p_descriptor_965mrg.get,
  set: _D_p_result_kmsqr8.set || _D_p_descriptor_965mrg.set
});

const _D_p_descriptor_i92mt = Object.getOwnPropertyDescriptor(D.prototype, "p");

const _D_p_result_70imcg = addProperty("d", 4)({
  get: _D_p_descriptor_i92mt.get,
  set: _D_p_descriptor_i92mt.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(D.prototype, "public", "p"),
  addInitializer: initializer => _D_member_initializers_jqjdlo.push(initializer)
}) || {};

_D_p_initializer_shhchg = _D_p_result_70imcg.initialize || (v => v);

Object.defineProperty(D.prototype, "p", {
  get: _D_p_result_70imcg.get || _D_p_descriptor_i92mt.get,
  set: _D_p_result_70imcg.set || _D_p_descriptor_i92mt.set
});

const c = new C();

console.assert(c.p === 1);

console.assert(c.a === 1);

console.assert(c.b === 2);

console.assert(c.c === undefined);

console.assert(c.d === undefined);

const d = new D();

console.assert(d.p === 2);

console.assert(d.a === 1);

console.assert(d.b === 2);

console.assert(d.c === 3);

console.assert(d.d === 4);