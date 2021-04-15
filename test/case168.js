function deco1(value, context) {
  return {
    get() {
      return value.get.call(this) * 2;
    },
    set(v) {
      value.set.call(this, v / 3);
    }
  }
}

function deco2(value, context) {
  return {
    get() {
      console.log(context.name, 'get')
      return value.get.call(this);
    },
    set(v) {
      console.log(context.name, 'set', v)
      return value.set.call(this, v);
    },
    initialize() {
      return 20;
    }
  }
}
class C {
  @deco1
  @deco2
  static accessor
  #p  = 10;
  static get check() {
    return C.#p
  }
  static set check(v) {
    C.#p = v
  }
}

console.log(C.check);
console.assert(C.check === 40);
C.check = 3;
console.log(C.check);
console.assert(C.check === 2);
