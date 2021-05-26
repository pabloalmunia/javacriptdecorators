function decorator(value, context) {
  if (context.kind === "method") {
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

const _C_class_initializers_8lbra8 = [];

const _C_static_initializers_ka3ba8 = [];

const _C_M_symbol_3r4sno = Symbol();

class C {
  static _C_M_temp_4l0aq8(v) {
    return v * 2;
  }
  static [_C_M_symbol_3r4sno] = decorator(C._C_M_temp_4l0aq8, {
    kind: "method",
    name: "#M",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_C_M_symbol_3r4sno]
    },
    defineMetadata: __DefineMetadata(C, "#M"),
    addInitializer: initializer => _C_static_initializers_ka3ba8.push(initializer)
  }) ?? C._C_M_temp_4l0aq8;
  static #M = C[_C_M_symbol_3r4sno];
  static [_C_M_symbol_3r4sno]() {
    return this.#M;
  }
  static check(v) {
    return this.#M(v);
  }
}

delete C._C_M_temp_4l0aq8;

C = decorator(C, {
  kind: "class",
  name: "C",
  defineMetadata: __DefineMetadata(C, "constructor"),
  addInitializer: initializer => _C_class_initializers_8lbra8.push(initializer)
}) ?? C;

_C_class_initializers_8lbra8.forEach(initializer => initializer.call(C, C));

_C_static_initializers_ka3ba8.forEach(initialize => initialize.call(C, C));

console.assert(C.check(2) === 8);

console.assert(C.test === 10);