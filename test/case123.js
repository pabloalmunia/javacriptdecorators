function decorator1 (value, context) {
  return (v) => v * 100;
}
function decorator2 (value, context) {
  return (v) => v * 200;
}

class C {
  @decorator1
  @decorator2
  #p = 1;
  check() {
    return this.#p;
  }
}

const a = new C();
console.assert(a.check() === 20000);