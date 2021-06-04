function logged(value, { kind, name }) {
  if (kind === "class") {
    return class extends value {
      constructor(...args) {
        super();
        this.x = args[0];
      }
    }
  }
}

// Class
@logged
class C {
}

const c = new C(1);
console.assert(c.x === 1);