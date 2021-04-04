class C {
  #_property_ljs5b58qt18 = 10;
  get #p() {
    return this.#_property_ljs5b58qt18;
  }
  set #p(v) {
    this.#_property_ljs5b58qt18 = v;
  }
  get check() {
    return this.#p;
  }
  set check(v) {
    this.#p = v;
  }
}

const c = new C();

c.check = 20;

console.assert(c.check === 20);

c.check = 30;

console.assert(c.check === 30);