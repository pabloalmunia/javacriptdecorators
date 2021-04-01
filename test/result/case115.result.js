function meta(key, value) {
  return function decorator1(element, context) {
    context.defineMetadata(key, value);
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

const _symbol_6dq8rdkqj6g = Symbol();

const _symbol_fsso8cmeao8 = Symbol();

class C {
  _temp_akl13ce2alo(v) {}
  static [_symbol_6dq8rdkqj6g] = meta("a", 1)(C.prototype._temp_akl13ce2alo, {
    kind: "setter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C.prototype[_symbol_6dq8rdkqj6g]
    },
    defineMetadata: __DefineMetadata(C.prototype, "#p")
  }) ?? C.prototype._temp_akl13ce2alo;
  static [_symbol_6dq8rdkqj6g] = meta("b", 2)(C[_symbol_6dq8rdkqj6g], {
    kind: "setter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C.prototype[_symbol_6dq8rdkqj6g]
    },
    defineMetadata: __DefineMetadata(C.prototype, "#p")
  }) ?? C[_symbol_6dq8rdkqj6g];
  set #p(v) {
    return C[_symbol_6dq8rdkqj6g].bind(this)(v);
  }
  [_symbol_6dq8rdkqj6g]() {
    return C[_symbol_6dq8rdkqj6g].bind(this);
  }
  _temp_b6tl9pqhl3g() {}
  static [_symbol_fsso8cmeao8] = meta("c", 3)(C.prototype._temp_b6tl9pqhl3g, {
    kind: "getter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C.prototype[_symbol_fsso8cmeao8]
    },
    defineMetadata: __DefineMetadata(C.prototype, "#p")
  }) ?? C.prototype._temp_b6tl9pqhl3g;
  static [_symbol_fsso8cmeao8] = meta("d", 3)(C[_symbol_fsso8cmeao8], {
    kind: "getter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C.prototype[_symbol_fsso8cmeao8]
    },
    defineMetadata: __DefineMetadata(C.prototype, "#p")
  }) ?? C[_symbol_fsso8cmeao8];
  get #p() {
    return C[_symbol_fsso8cmeao8].bind(this)();
  }
  [_symbol_fsso8cmeao8]() {
    return C[_symbol_fsso8cmeao8].bind(this);
  }
}

delete C.prototype._temp_b6tl9pqhl3g;

delete C.prototype._temp_akl13ce2alo;

console.log(C.prototype[Symbol.metadata]);