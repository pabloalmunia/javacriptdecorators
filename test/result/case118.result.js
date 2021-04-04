function addProperty(key, value) {
  return (klass, context) => {
    if (context.kind === "init-method" || context.kind === "init-getter" || context.kind === "init-setter") {
      return {
        initialize() {
          this[key] = value;
        }
      };
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

function __applyDecorator(result, origin, collection) {
  if (typeof result === "undefined") {
    return origin;
  }
  if (typeof result === "function") {
    return result;
  }
  if (typeof result === "object") {
    if (typeof result.initialize === "function") {
      collection.push(result.initialize);
    }
    return result.method || result.get || result.set || result.definition || origin;
  }
  throw new TypeError("invalid decorator return");
}

const _member_initializers_v6gf7anckjo = [];

const _symbol_i6p39b292og = Symbol();

class C {
  constructor() {
    this.z = 100;
    _member_initializers_v6gf7anckjo.forEach(initialize => initialize.call(this));
  }
  _temp_ts6p908jm0o(v) {}
  static [_symbol_i6p39b292og] = __applyDecorator(addProperty("a", 1)(C.prototype._temp_ts6p908jm0o, {
    kind: "init-setter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C.prototype[_symbol_i6p39b292og]
    },
    defineMetadata: __DefineMetadata(C.prototype, "#p")
  }), C.prototype._temp_ts6p908jm0o, _member_initializers_v6gf7anckjo);
  static [_symbol_i6p39b292og] = __applyDecorator(addProperty("b", 2)(C.prototype.undefined, {
    kind: "init-setter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C.prototype[_symbol_i6p39b292og]
    },
    defineMetadata: __DefineMetadata(C.prototype, "#p")
  }), C[_symbol_i6p39b292og], _member_initializers_v6gf7anckjo);
  set #p(v) {
    return C[_symbol_i6p39b292og].bind(this)(v);
  }
  [_symbol_i6p39b292og]() {
    return C[_symbol_i6p39b292og].bind(this);
  }
}

delete C.prototype._temp_ts6p908jm0o;

const _member_initializers_otte3718ngg = [];

const _symbol_vo680a12u08 = Symbol();

class D extends C {
  constructor() {
    super();
    _member_initializers_otte3718ngg.forEach(initialize => initialize.call(this));
  }
  _temp_se12goejbbo(v) {}
  static [_symbol_vo680a12u08] = __applyDecorator(addProperty("c", 3)(D.prototype._temp_se12goejbbo, {
    kind: "init-setter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: D.prototype[_symbol_vo680a12u08]
    },
    defineMetadata: __DefineMetadata(D.prototype, "#p")
  }), D.prototype._temp_se12goejbbo, _member_initializers_otte3718ngg);
  static [_symbol_vo680a12u08] = __applyDecorator(addProperty("d", 4)(D.prototype.undefined, {
    kind: "init-setter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: D.prototype[_symbol_vo680a12u08]
    },
    defineMetadata: __DefineMetadata(D.prototype, "#p")
  }), D[_symbol_vo680a12u08], _member_initializers_otte3718ngg);
  set #p(v) {
    return D[_symbol_vo680a12u08].bind(this)(v);
  }
  [_symbol_vo680a12u08]() {
    return D[_symbol_vo680a12u08].bind(this);
  }
}

delete D.prototype._temp_se12goejbbo;

const c = new C();

console.assert(c.a === 1);

console.assert(c.b === 2);

console.assert(c.c === undefined);

console.assert(c.d === undefined);

const d = new D();

console.assert(d.a === 1);

console.assert(d.b === 2);

console.assert(d.c === 3);

console.assert(d.d === 4);