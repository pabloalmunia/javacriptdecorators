class C {
  #_p_private_property_p8hoko = 10;
  get p() {
    return this.#_p_private_property_p8hoko;
  }
  set p(v) {
    this.#_p_private_property_p8hoko = v;
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