function deco(value, context) {
  return {
    get() {
      return value.get.call(this) * 2;
    },
    set(v) {
      value.set.call(this, v / 3);
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

const _symbol_82rkmba4r08 = Symbol();

const _symbol_tprs6j8ooho = Symbol();

let _getter_jn9m8dgmgs;

let _setter_o2j2cqtl7q8;

let _initializer_qc2o2771re8;

class C {
  #_property_d2nqf36uu5g = _initializer_qc2o2771re8.call(this, 10);
  get #p() {
    return _getter_jn9m8dgmgs.call(this);
  }
  set #p(v) {
    return _setter_o2j2cqtl7q8.call(this, v);
  }
  static _getter_jn9m8dgmgs() {
    return this.#_property_d2nqf36uu5g;
  }
  static _setter_o2j2cqtl7q8(v) {
    this.#_property_d2nqf36uu5g = v;
  }
  [_symbol_82rkmba4r08]() {
    return this.#p;
  }
  [_symbol_tprs6j8ooho](v) {
    this.#p = v;
  }
  get check() {
    return this.#p;
  }
  set check(v) {
    this.#p = v;
  }
}

_getter_jn9m8dgmgs = C._getter_jn9m8dgmgs;

_setter_o2j2cqtl7q8 = C._setter_o2j2cqtl7q8;

delete C._getter_jn9m8dgmgs;

delete C._setter_o2j2cqtl7q8;

const _result_8b8gh8n59hg = deco({
  get: _getter_jn9m8dgmgs,
  set: _setter_o2j2cqtl7q8
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C.prototype[_symbol_82rkmba4r08],
    set: C.prototype[_symbol_tprs6j8ooho]
  },
  isStatic: false,
  isPrivate: true,
  defineMetadata: __DefineMetadata(C.prototype, "#p")
}) || {};

_initializer_qc2o2771re8 = _result_8b8gh8n59hg.initialize || (v => v);

_getter_jn9m8dgmgs = _result_8b8gh8n59hg.get || _getter_jn9m8dgmgs;

_setter_o2j2cqtl7q8 = _result_8b8gh8n59hg.set || _setter_o2j2cqtl7q8;

const c = new C();

c.check = 3;

console.assert(c.check === 2);