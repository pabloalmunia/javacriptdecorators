function logged(
  value,
  {
    kind,
    name
  }
) {
  if (kind === "init-class") {
    return {
      definition: class extends value {
        constructor(...args) {
          super();
          console.log(`constructing an instance of ${name} with arguments ${args.join(", ")}`);
        }
      },

      initialize() {
        console.log(`finished defining ${this.name}`);
      }
    };
  }
}

class C {}

_result_0pr142nglgg = logged(C, {
  kind: "init-class",
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
}) || {};

C = _result_0pr142nglgg.definition || C;
_result_0pr142nglgg.initialize && _result_0pr142nglgg.initialize.call(C);
new C(1);