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

      initialize(value) {
        console.log(`finished defining ${this.name}`);
      }
    };
  }
}

class C {}

_resulte8gv39r2eeg = logged(C, {
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

C = _resulte8gv39r2eeg.definition || C;
_resulte8gv39r2eeg.initialize && _resulte8gv39r2eeg.initialize.call(C, C);
new C(1);