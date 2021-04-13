function deco(value, name) {
  return {
    set(v) {
      value.set.call(this, v * 2);
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

let _initializer_104jav81k0o;

class C {
  #_property_j0om968rrpo = _initializer_104jav81k0o.call(this, );
  get p() {
    return this.#_property_j0om968rrpo;
  }
  set p(v) {
    this.#_property_j0om968rrpo = v;
  }
}

const _descriptor_tbfbtted9o8 = Object.getOwnPropertyDescriptor(C.prototype, "p");

const _result_r5fiotohll8 = deco({
  get: _descriptor_tbfbtted9o8.get,
  set: _descriptor_tbfbtted9o8.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: undefined,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C.prototype, "p")
}) || {};

_initializer_104jav81k0o = _result_r5fiotohll8.initialize || (v => v);

Object.defineProperty(C.prototype, "p", {
  get: _result_r5fiotohll8.get || _descriptor_tbfbtted9o8.get,
  set: _result_r5fiotohll8.set || _descriptor_tbfbtted9o8.set
});

const c = new C();

c.p = 10;

console.log(c.p);