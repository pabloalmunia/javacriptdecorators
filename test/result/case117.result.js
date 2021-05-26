function decorator(value, context) {
  if (context.kind === "setter") {
    context.addInitializer(function() {
      this.test = 10;
    });
    return function(v) {
      return value.call(this, v * 2);
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

const _C_member_initializers_a9bu48 = [];

const _C_p_symbol_cl526o = Symbol();

class C {
  constructor() {
    _C_member_initializers_a9bu48.forEach(initialize => initialize.call(this));
  }
  #other = 10;
  get #p() {
    return this.#other;
  }
  _C_p_temp_d6hcn(v) {
    this.#other = v;
  }
  static [_C_p_symbol_cl526o] = decorator(C.prototype._C_p_temp_d6hcn, {
    kind: "setter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C.prototype[_C_p_symbol_cl526o]
    },
    defineMetadata: __DefineMetadata(C.prototype, "#p"),
    addInitializer: initializer => _C_member_initializers_a9bu48.push(initializer)
  }) ?? C.prototype._C_p_temp_d6hcn;
  set #p(v) {
    return C[_C_p_symbol_cl526o].bind(this)(v);
  }
  [_C_p_symbol_cl526o]() {
    return C[_C_p_symbol_cl526o].bind(this);
  }
  set check(v) {
    this.#p = v;
  }
  get check() {
    return this.#p;
  }
}

delete C.prototype._C_p_temp_d6hcn;

console.assert(new C().test === 10);

const c = new C();

c.check = 20;

console.assert(c.check === 40);