function deco1(value, context) {
  if (context.kind === "auto-accessor") {
    return {
      set(v) {
        value.set.call(this, v * 2);
      }
    };
  }
}

function deco2(value, context) {
  if (context.kind === "auto-accessor") {
    return {
      set(v) {
        value.set.call(this, v * 3);
      }
    };
  }
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

let _C_p_initializer_l4mvn;

let _C_p_initializer_eukg38;

class C {
  #_p_private_property_78hje8 = _C_p_initializer_eukg38.call(this, _C_p_initializer_l4mvn.call(this, ));
  get p() {
    return this.#_p_private_property_78hje8;
  }
  set p(v) {
    this.#_p_private_property_78hje8 = v;
  }
}

const _C_p_descriptor_i3ij98 = Object.getOwnPropertyDescriptor(C.prototype, "p");

const _C_p_result_pfa3ng = deco1({
  get: _C_p_descriptor_i3ij98.get,
  set: _C_p_descriptor_i3ij98.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C.prototype, "p")
}) || {};

_C_p_initializer_eukg38 = _C_p_result_pfa3ng.initialize || (v => v);

Object.defineProperty(C.prototype, "p", {
  get: _C_p_result_pfa3ng.get || _C_p_descriptor_i3ij98.get,
  set: _C_p_result_pfa3ng.set || _C_p_descriptor_i3ij98.set
});

const _C_p_descriptor_64uj28 = Object.getOwnPropertyDescriptor(C.prototype, "p");

const _C_p_result_1jgvo = deco2({
  get: _C_p_descriptor_64uj28.get,
  set: _C_p_descriptor_64uj28.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C.prototype, "p")
}) || {};

_C_p_initializer_l4mvn = _C_p_result_1jgvo.initialize || (v => v);

Object.defineProperty(C.prototype, "p", {
  get: _C_p_result_1jgvo.get || _C_p_descriptor_64uj28.get,
  set: _C_p_result_1jgvo.set || _C_p_descriptor_64uj28.set
});

const c = new C();

c.p = 10;

console.log(c.p);