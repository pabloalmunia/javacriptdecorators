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

C.check = 3;
console.assert(C.check === 2);
