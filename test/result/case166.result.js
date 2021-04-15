class C {
  static #_property_4h341v6jra8 = 10;
  static get #P() {
    return this.#_property_4h341v6jra8;
  }
  static set #P(v) {
    this.#_property_4h341v6jra8 = v;
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