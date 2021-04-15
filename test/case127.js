function deco(value, context) {
  return {
    get() {
      return value.get.call(this) * 2;
    },
    set(v) {
      value.set.call(this, v / 3);
    }
  }
}

class C {
  @deco
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
c.check = 3;
console.assert(c.check === 2);
