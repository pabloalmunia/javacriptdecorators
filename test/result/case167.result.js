function deco(value, context) {
  return {
    get() {
      return value.get.call(this) * 2;
    },
    set(v) {
      value.set.call(this, v / 3);
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

class C {
  static accessor;
  #p = 10;
  static get check() {
    return C.#p;
  }
  static set check(v) {
    C.#p = v;
  }
}

C.accessor = deco(C.accessor, {
  kind: "undefinedfield",
  name: "accessor",
  isStatic: true,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C, "accessor")
}) ?? C.accessor;

C.check = 3;

console.assert(C.check === 2);