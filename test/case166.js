class C {
  static accessor
  #P  = 10;
  static get check() {
    return this.#P;
  }
  static set check(v) {
    this.#P = v;
  }
}

C.check = 20;
console.assert(C.check === 20);
C.check = 30
console.assert(C.check === 30);
