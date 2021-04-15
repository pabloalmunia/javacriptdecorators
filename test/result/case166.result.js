class C {
  static #_property_lufvmn6vp = 10;
  static get #P() {
    return this.#_property_lufvmn6vp;
  }
  static set #P(v) {
    this.#_property_lufvmn6vp = v;
  }
  static get check() {
    return this.#P;
  }
  static set check(v) {
    this.#P = v;
  }
}

C.check = 20;

console.assert(C.check === 20);

C.check = 30;

console.assert(C.check === 30);