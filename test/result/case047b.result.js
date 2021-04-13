function deco(value, name) {}

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

let _initializer_bb032skolbo;

class C {
  #_property_ikv0uij7uv8 = _initializer_bb032skolbo.call(this, 10);
  get p() {
    return this.#_property_ikv0uij7uv8;
  }
  set p(v) {
    this.#_property_ikv0uij7uv8 = v;
  }
}

const _descriptor_ag84adus77 = Object.getOwnPropertyDescriptor(C.prototype, "p");

const _result_00uno7eq3p = deco({
  get: _descriptor_ag84adus77.get,
  set: _descriptor_ag84adus77.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: undefined,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C.prototype, "p")
}) || {};

_initializer_bb032skolbo = _result_00uno7eq3p.initialize || (v => v);

Object.defineProperty(C.prototype, "p", {
  get: _result_00uno7eq3p.get || _descriptor_ag84adus77.get,
  set: _result_00uno7eq3p.set || _descriptor_ag84adus77.set
});

const c = new C();

console.log(c.p);