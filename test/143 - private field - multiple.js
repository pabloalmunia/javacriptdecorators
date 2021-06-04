function decorator1(value, context) {
  if (context.kind === "field") {
    return function(v) {
      return v * 2;
    }
  }
}
function decorator2(value, context) {
  if (context.kind === "field") {
    return function(v) {
      return v * 3;
    }
  }
}

class C {
  @decorator1
  @decorator2
  #p = 1;
  
  get check() {
    return this.#p;
  }
}

const c = new C();
console.assert(c.check === 6)