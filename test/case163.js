function decorator1 (value, context) {
  return (v) => v * 100;
}
function decorator2 (value, context) {
  return (v) => v * 200;
}

class C {
  @decorator1
  @decorator2
  static #p = 1;
  static check() {
    return C.#p;
  }
}


console.assert(C.check() === 20000);