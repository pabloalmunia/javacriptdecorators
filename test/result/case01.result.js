function add(
  value,
  {
    kind,
    name
  }
) {
  value.prototype.x = 10;
}

class C {}

C = add(C, {
  kind: "class",
  name: "C",

  defineMetadata: function(key, value) {
    if (!Symbol.metadata) {
      Symbol.metadata = Symbol();
    }

    if (!C[Symbol.metadata]) {
      C[Symbol.metadata] = Object.create(null);
    }

    if (!C[Symbol.metadata].constructor) {
      C[Symbol.metadata].constructor = {};
    }

    const db = C[Symbol.metadata].constructor;

    if (key in db) {
      if (!Array.isArray(db[key])) {
        return db[key] = [db[key], value];
      }

      return db[key].push(value);
    }

    return db[key] = value;
  }
}) ?? C;

console.log(new C().x);