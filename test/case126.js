class C {
  accessor
  #p  = 10;
  get check() {
    return this.#p
  }
  set check(v) {
    this.#p = v
  }
}

const c = new C();
c.check = 20;
console.assert(c.check === 20);
c.check = 30
console.assert(c.check === 30);
