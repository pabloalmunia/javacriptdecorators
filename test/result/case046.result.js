class C {
  #_property_r7e06jrbgv = 10;
  get p() {
    return this.#_property_r7e06jrbgv;
  }
  set p(v) {
    this.#_property_r7e06jrbgv = v;
  }
}

const c = new C();

c.p = 20;

console.assert(c.p === 20);

c.p = 30;

console.assert(c.p === 30);

const descriptor = Object.getOwnPropertyDescriptor(C.prototype, "p");

console.assert(descriptor.get);

console.assert(descriptor.set);