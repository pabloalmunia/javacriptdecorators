function deco(value, context) {
  context.addInitializer(function() {
    this.test = 10;
  });
  return function (v) {
    return v * 2;
  };
}

class C {
  @init:deco
  static
  #p  = 10;
  static get check() {
    return C.#p
  }
  static set check(v) {
    C.#p = v
  }
}

console.assert(C.test === 10);
console.assert(C.check === 20);
