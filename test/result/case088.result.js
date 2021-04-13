function deco1(value, context) {
  return {
    set(v) {
      value.set.call(this, v * 2);
    }
  };
}

function deco2(value, context) {
  return {
    set(v) {
      value.set.call(this, v * 3);
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

let _initializer_f5cq72sdfg8;

let _initializer_0tk451sj87o;

class C {
  static #_property_43ktku3u3jg;
  static get p() {
    return this.#_property_43ktku3u3jg;
  }
  static set p(v) {
    this.#_property_43ktku3u3jg = v;
  }
}

const _descriptor_j7jiuni7qm = Object.getOwnPropertyDescriptor(C, "p");

const _result_5jta6p7b0eo = deco1({
  get: _descriptor_j7jiuni7qm.get,
  set: _descriptor_j7jiuni7qm.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: true,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C, "p")
}) || {};

_initializer_0tk451sj87o = _result_5jta6p7b0eo.initialize || (v => v);

Object.defineProperty(C, "p", {
  get: _result_5jta6p7b0eo.get || _descriptor_j7jiuni7qm.get,
  set: _result_5jta6p7b0eo.set || _descriptor_j7jiuni7qm.set
});

C.p = _initializer_0tk451sj87o(C.p);

const _descriptor_ek6lombq2b8 = Object.getOwnPropertyDescriptor(C, "p");

const _result_66m9ouvgpco = deco2({
  get: _descriptor_ek6lombq2b8.get,
  set: _descriptor_ek6lombq2b8.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: true,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C, "p")
}) || {};

_initializer_f5cq72sdfg8 = _result_66m9ouvgpco.initialize || (v => v);

Object.defineProperty(C, "p", {
  get: _result_66m9ouvgpco.get || _descriptor_ek6lombq2b8.get,
  set: _result_66m9ouvgpco.set || _descriptor_ek6lombq2b8.set
});

C.p = _initializer_f5cq72sdfg8(C.p);

C.p = 10;

console.log(C.p);