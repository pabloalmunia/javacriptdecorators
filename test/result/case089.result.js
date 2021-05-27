function decorator(value, context) {
  console.log("value", value);
  console.log("context", context);
  context.addInitializer(function() {
    this.test = 10;
  });
  return function(v) {
    return v * 2;
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

const _C_static_initializers_2i1j3o = [];

class C {
  static p = 10;
}

const _C_p_initializer_rqlnng = decorator(undefined, {
  kind: "field",
  name: "p",
  isStatic: true,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C, "p"),
  addInitializer: initializer => _C_static_initializers_2i1j3o.push(initializer)
}) ?? (v => v);

C.p = _C_p_initializer_rqlnng.call(C, C.p);

_C_static_initializers_2i1j3o.forEach(initializer => initializer.call(C, C));

console.assert(C.test === 10);

console.assert(C.p === 20);