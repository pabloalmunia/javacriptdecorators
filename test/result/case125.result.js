function meta(key, value) {
  return function decorator1(_, context) {
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

const _symbol_3vuhdnfi2qg = Symbol();

const _symbol_7sc5cb6qf98 = Symbol();

let _initializer_kaagnamsel8;

let _initializer_q8mahnn417g;

const _symbol_q2qfeg0qr2o = Symbol();

const _symbol_hmbd27gt3vo = Symbol();

let _initializer_chp8ksl10ko;

let _initializer_p3kp4ggrfe;

class C {
  #p = _initializer_q8mahnn417g.call(this, _initializer_kaagnamsel8.call(this, 10));
  [_symbol_3vuhdnfi2qg]() {
    return this.#p;
  }
  [_symbol_7sc5cb6qf98](v) {
    this.#p = v;
  }
  #f = _initializer_p3kp4ggrfe.call(this, _initializer_chp8ksl10ko.call(this, 20));
  [_symbol_q2qfeg0qr2o]() {
    return this.#f;
  }
  [_symbol_hmbd27gt3vo](v) {
    this.#f = v;
  }
}

_initializer_p3kp4ggrfe = meta("d", 3)(undefined, {
  kind: "field",
  name: "#f",
  access: {
    get: C.prototype[_symbol_q2qfeg0qr2o],
    set: C.prototype[_symbol_hmbd27gt3vo]
  },
  isStatic: false,
  isPrivate: true,
  defineMetadata: __DefineMetadata(C.prototype, "#f")
}) ?? (v => v);

_initializer_chp8ksl10ko = meta("c", 3)(undefined, {
  kind: "field",
  name: "#f",
  access: {
    get: C.prototype[_symbol_q2qfeg0qr2o],
    set: C.prototype[_symbol_hmbd27gt3vo]
  },
  isStatic: false,
  isPrivate: true,
  defineMetadata: __DefineMetadata(C.prototype, "#f")
}) ?? (v => v);

_initializer_q8mahnn417g = meta("b", 2)(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: C.prototype[_symbol_3vuhdnfi2qg],
    set: C.prototype[_symbol_7sc5cb6qf98]
  },
  isStatic: false,
  isPrivate: true,
  defineMetadata: __DefineMetadata(C.prototype, "#p")
}) ?? (v => v);

_initializer_kaagnamsel8 = meta("a", 1)(undefined, {
  kind: "field",
  name: "#p",
  access: {
    get: C.prototype[_symbol_3vuhdnfi2qg],
    set: C.prototype[_symbol_7sc5cb6qf98]
  },
  isStatic: false,
  isPrivate: true,
  defineMetadata: __DefineMetadata(C.prototype, "#p")
}) ?? (v => v);

console.log(C.prototype[Symbol.metadata]);