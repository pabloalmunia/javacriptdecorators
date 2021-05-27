function decorator(value, context) {
  console.log("value", value);
  console.log("context", context);
  context.addInitializer(function() {
    this.test = 10;
  });
  return {
    initialize(v) {
      return v * 2;
    }
  };
}

if (!Symbol.metadata) {
  Symbol.metadata = Symbol();
}

function __DefineMetadata(base, name) {
  return function(key, value) {
    if (!base[Symbol.metadata]) {
      base[Symbol.metadata] = Object.create(null);
    }
    if (!base[Symbol.metadata][name]) {
      base[Symbol.metadata][name] = {};
    }
    const db = base[Symbol.metadata][name];
    if (key in db) {
      if (!Array.isArray(db[key])) {
        return db[key] = [db[key], value];
      }
      return db[key].push(value);
    }
    return db[key] = value;
  };
}

let _C_p_initializer_jiba2;

const _C_static_initializers_uqfiro = [];

class C {
  static #_p_private_property_7qlcs8 = 10;
  static get p() {
    return this.#_p_private_property_7qlcs8;
  }
  static set p(v) {
    this.#_p_private_property_7qlcs8 = v;
  }
}

const _C_p_descriptor_fio2so = Object.getOwnPropertyDescriptor(C, "p");

const _C_p_result_1cd0i8 = decorator({
  get: _C_p_descriptor_fio2so.get,
  set: _C_p_descriptor_fio2so.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: true,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C, "p"),
  addInitializer: initializer => _C_static_initializers_uqfiro.push(initializer)
}) || {};

_C_p_initializer_jiba2 = _C_p_result_1cd0i8.initialize || (v => v);

Object.defineProperty(C, "p", {
  get: _C_p_result_1cd0i8.get || _C_p_descriptor_fio2so.get,
  set: _C_p_result_1cd0i8.set || _C_p_descriptor_fio2so.set
});

C.p = _C_p_initializer_jiba2(C.p);

_C_static_initializers_uqfiro.forEach(initialize => initialize.call(C, C));

console.assert(C.test === 10);

console.assert(C.p === 20);