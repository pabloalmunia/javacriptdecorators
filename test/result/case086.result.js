class C {
  static #_property_ibemb36fiqo = 10;
  static get P() {
    return this.#_property_ibemb36fiqo;
  }
  static set P(v) {
    this.#_property_ibemb36fiqo = v;
  }
}

C.P = 20;

console.assert(C.P === 20);

C.P = 30;

console.assert(C.P === 30);

const descriptor = Object.getOwnPropertyDescriptor(C, "P");

console.assert(descriptor.get);

console.assert(descriptor.set);