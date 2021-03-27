function logged(value, { kind, name }) {
  if (kind === "class") {
    return class extends value {
      constructor(...args) {
        super();
        console.log(`constructing an instance of ${name} with arguments ${args.join(", ")}`);
      }
    }
  }
}

// Class
@logged
class C {
}

new C(1);