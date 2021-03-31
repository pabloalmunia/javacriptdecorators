const MY_META = Symbol();

function myMeta(value, context) {
  context.defineMetadata("my-meta", true);
  context.defineMetadata(MY_META, true);
  return class extends C {};
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

class C {}

C = myMeta(C, {
  kind: "class",
  name: "C",
  defineMetadata: __DefineMetadata(C, "constructor")
}) ?? C;

console.log(C[Symbol.metadata]);