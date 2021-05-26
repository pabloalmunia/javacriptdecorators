function decorator(value, context) {
  if ((context.kind === "method" || context.kind === "getter" || context.kind === "setter") && context.isStatic && context.addInitializer) {
    context.addInitializer(function() {
      this.test = 10;
    });
    return function(...args) {
      console.log(`starting ${context.name} with arguments ${args.join(", ")}`);
      const ret = value(...args);
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

const _C_static_initializers_su33vg = [];

const _C_P_symbol_la8suo = Symbol();

class C {
  static #other = 2;
  static _C_P_temp_ig9ifo() {
    return C.#other;
  }
  static [_C_P_symbol_la8suo] = decorator(C._C_P_temp_ig9ifo, {
    kind: "getter",
    name: "#P",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_C_P_symbol_la8suo]
    },
    defineMetadata: __DefineMetadata(C, "#P"),
    addInitializer: initializer => _C_static_initializers_su33vg.push(initializer)
  }) ?? C._C_P_temp_ig9ifo;
  static get #P() {
    return C[_C_P_symbol_la8suo].bind(this)();
  }
  static [_C_P_symbol_la8suo]() {
    return C[_C_P_symbol_la8suo].bind(this);
  }
  static check() {
    return C.#P;
  }
}

delete C._C_P_temp_ig9ifo;

_C_static_initializers_su33vg.forEach(initialize => initialize.call(C, C));

console.assert(C.check() === 4);

console.assert(C.test === 10);