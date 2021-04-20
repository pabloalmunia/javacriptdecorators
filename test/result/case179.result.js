const A = Symbol();

class C {
  #_A_private_property_i8imtg = 10;
  get [A]() {
    return this.#_A_private_property_i8imtg;
  }
  set [A](v) {
    this.#_A_private_property_i8imtg = v;
  }
}

const c = new C();

console.assert(c[A] === 10);

c[A] = 20;

console.assert(c[A] === 20);