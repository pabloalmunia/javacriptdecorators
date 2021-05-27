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

let _C_p_initializer_qt2ht;

const _C_member_initializers_4hfvm = [];

class C {
  constructor() {
    _C_member_initializers_4hfvm.forEach(initialize => initialize.call(this));
  }
  #_p_private_property_bgpu8g = _C_p_initializer_qt2ht.call(this, 10);
  get p() {
    return this.#_p_private_property_bgpu8g;
  }
  set p(v) {
    this.#_p_private_property_bgpu8g = v;
  }
}

const _C_p_descriptor_mf6sjo = Object.getOwnPropertyDescriptor(C.prototype, "p");

const _C_p_result_hvujf = decorator({
  get: _C_p_descriptor_mf6sjo.get,
  set: _C_p_descriptor_mf6sjo.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C.prototype, "p"),
  addInitializer: initializer => _C_member_initializers_4hfvm.push(initializer)
}) || {};

_C_p_initializer_qt2ht = _C_p_result_hvujf.initialize || (v => v);

Object.defineProperty(C.prototype, "p", {
  get: _C_p_result_hvujf.get || _C_p_descriptor_mf6sjo.get,
  set: _C_p_result_hvujf.set || _C_p_descriptor_mf6sjo.set
});

const c = new C();

console.assert(c.test === 10);

console.assert(c.p === 20);