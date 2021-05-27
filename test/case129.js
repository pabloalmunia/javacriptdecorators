function deco(value, context) {
  context.addInitializer(function() {
    this.test = 10;
  })
  return {
    get() {
      return value.get.call(this) * 2;
    },
    set(v) {
      value.set.call(this, v / 3);
    },
    initialize(v) {
      return v / 3;
    }
  }
}

class C {
  @init:deco
  accessor
  #p  = 30;
  get check() {
    return this.#p
  }
  set check(v) {
    this.#p = v
  }
}

const c = new C();
console.assert(c.test === 10);
console.assert(c.check === 20);
c.check = 3;
console.assert(c.check === 2);
