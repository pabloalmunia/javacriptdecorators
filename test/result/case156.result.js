function decorator(value, context) {
  if ((context.kind === "method" || context.kind === "getter" || context.kind === "setter") && context.isStatic && context.addInitializer) {
    context.addInitializer(function() {
      this.test = 10;
    });
    return function(...args) {
      console.log(
        `starting ${context.kind} ${context.name} ${context.kind !== "getter" ? `with arguments ${args.join(", ")}` : ""}`
      );
      const ret = value(args[0] * 2);
      console.log(`ending ${context.name}`);
      return ret * 2;
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

const _C_static_initializers_73b1oo = [];

const _C_P_symbol_firn7g = Symbol();

const _C_P_symbol_0vclbg = Symbol();

class C {
  static #other = 0;
  static _C_P_temp_sm66u8() {
    return C.#other;
  }
  static [_C_P_symbol_firn7g] = decorator(C._C_P_temp_sm66u8, {
    kind: "getter",
    name: "#P",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_C_P_symbol_firn7g]
    },
    defineMetadata: __DefineMetadata(C, "#P"),
    addInitializer: initializer => _C_static_initializers_73b1oo.push(initializer)
  }) ?? C._C_P_temp_sm66u8;
  static get #P() {
    return C[_C_P_symbol_firn7g].bind(this)();
  }
  static [_C_P_symbol_firn7g]() {
    return C[_C_P_symbol_firn7g].bind(this);
  }
  static _C_P_temp_i2hang(v) {
    return C.#other = v;
  }
  static [_C_P_symbol_0vclbg] = decorator(C._C_P_temp_i2hang, {
    kind: "setter",
    name: "#P",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_C_P_symbol_0vclbg]
    },
    defineMetadata: __DefineMetadata(C, "#P"),
    addInitializer: initializer => _C_static_initializers_73b1oo.push(initializer)
  }) ?? C._C_P_temp_i2hang;
  static set #P(v) {
    return C[_C_P_symbol_0vclbg].bind(this)(v);
  }
  static [_C_P_symbol_0vclbg]() {
    return C[_C_P_symbol_0vclbg].bind(this);
  }
  static get check() {
    return C.#P;
  }
  static set check(v) {
    return C.#P = v;
  }
}

delete C._C_P_temp_i2hang;

delete C._C_P_temp_sm66u8;

_C_static_initializers_73b1oo.forEach(initialize => initialize.call(C, C));

console.assert(C.check === 0);

C.check = 20;

console.assert(C.check === 80);

console.assert(C.test === 10);