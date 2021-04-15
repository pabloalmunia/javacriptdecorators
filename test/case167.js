function deco(value, context) {
  return {
    get() {
      return value.get.call(this) * 2;
    },
    set(v) {
      value.set.call(this, v / 3);
    },
    initialize(v) {
      return v * 2;
    }
  }
}

class C {
  @deco
  static
  accessor
  #p  = 10;
  static get check() {
    return C.#p
  }
  static set check(v) {
    C.#p = v
  }
}

console.assert(C.check === 40);
C.check = 3;
console.assert(C.check === 2);
