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

const _member_initializers_jd19l9pfoqo = [];

const _symbol_3mm1qdgn4ag = Symbol();

class C {
  constructor() {
    this.z = 100;
    _member_initializers_jd19l9pfoqo.forEach(initialize => initialize.call(this));
  }
  _temp_lqcvmnd1cuo() {}
  static [_symbol_3mm1qdgn4ag] = __applyDecorator(addProperty("a", 1)(C.prototype._temp_lqcvmnd1cuo, {
    kind: "init-getter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C.prototype[_symbol_3mm1qdgn4ag]
    },
    defineMetadata: __DefineMetadata(C.prototype, "#p")
  }), C.prototype._temp_lqcvmnd1cuo, _member_initializers_jd19l9pfoqo);
  static [_symbol_3mm1qdgn4ag] = __applyDecorator(addProperty("b", 2)(C.prototype.undefined, {
    kind: "init-getter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C.prototype[_symbol_3mm1qdgn4ag]
    },
    defineMetadata: __DefineMetadata(C.prototype, "#p")
  }), C[_symbol_3mm1qdgn4ag], _member_initializers_jd19l9pfoqo);
  get #p() {
    return C[_symbol_3mm1qdgn4ag].bind(this)();
  }
  [_symbol_3mm1qdgn4ag]() {
    return C[_symbol_3mm1qdgn4ag].bind(this);
  }
}

delete C.prototype._temp_lqcvmnd1cuo;

const _member_initializers_nudk5m02tlo = [];

const _symbol_cme92t00tc8 = Symbol();

class D extends C {
  constructor() {
    super();
    _member_initializers_nudk5m02tlo.forEach(initialize => initialize.call(this));
  }
  _temp_5ug2ol3mtg() {}
  static [_symbol_cme92t00tc8] = __applyDecorator(addProperty("c", 3)(D.prototype._temp_5ug2ol3mtg, {
    kind: "init-getter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: D.prototype[_symbol_cme92t00tc8]
    },
    defineMetadata: __DefineMetadata(D.prototype, "#p")
  }), D.prototype._temp_5ug2ol3mtg, _member_initializers_nudk5m02tlo);
  static [_symbol_cme92t00tc8] = __applyDecorator(addProperty("d", 4)(D.prototype.undefined, {
    kind: "init-getter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: D.prototype[_symbol_cme92t00tc8]
    },
    defineMetadata: __DefineMetadata(D.prototype, "#p")
  }), D[_symbol_cme92t00tc8], _member_initializers_nudk5m02tlo);
  get #p() {
    return D[_symbol_cme92t00tc8].bind(this)();
  }
  [_symbol_cme92t00tc8]() {
    return D[_symbol_cme92t00tc8].bind(this);
  }
}

delete D.prototype._temp_5ug2ol3mtg;

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