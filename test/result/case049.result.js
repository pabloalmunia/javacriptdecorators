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

let _initializer_0to4nj6hv0o;

let _initializer_io6ouke1hm8;

class C {
  #_property_j5kg649p0ho = _initializer_io6ouke1hm8.call(this, _initializer_0to4nj6hv0o.call(this, ));
  get p() {
    return this.#_property_j5kg649p0ho;
  }
  set p(v) {
    this.#_property_j5kg649p0ho = v;
  }
}

const _descriptor_7vmf5cn377o = Object.getOwnPropertyDescriptor(C.prototype, "p");

const _result_ji32kqme0rg = deco1({
  get: _descriptor_7vmf5cn377o.get,
  set: _descriptor_7vmf5cn377o.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: undefined,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C.prototype, "p")
}) || {};

_initializer_io6ouke1hm8 = _result_ji32kqme0rg.initialize || (v => v);

Object.defineProperty(C.prototype, "p", {
  get: _result_ji32kqme0rg.get || _descriptor_7vmf5cn377o.get,
  set: _result_ji32kqme0rg.set || _descriptor_7vmf5cn377o.set
});

const _descriptor_ppuo98690rg = Object.getOwnPropertyDescriptor(C.prototype, "p");

const _result_u28d4spqud8 = deco2({
  get: _descriptor_ppuo98690rg.get,
  set: _descriptor_ppuo98690rg.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: undefined,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C.prototype, "p")
}) || {};

_initializer_0to4nj6hv0o = _result_u28d4spqud8.initialize || (v => v);

Object.defineProperty(C.prototype, "p", {
  get: _result_u28d4spqud8.get || _descriptor_ppuo98690rg.get,
  set: _result_u28d4spqud8.set || _descriptor_ppuo98690rg.set
});

const c = new C();

c.p = 10;

console.log(c.p);