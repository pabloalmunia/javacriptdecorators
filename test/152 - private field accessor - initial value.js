function decorator (context) {
  return {
    initialize (v) {
      return v * 2;
    }
  }
}
class C {
  @decorator accessor
  #p = 10;
  
  get check() {
    return this.#p;
  }
}

const c = new C();
console.assert(c.check === 20)