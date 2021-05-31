function decorator (value, context) {
  context.addInitializer(function() {
    this.test = 10;
  });
  return {
    initialize (v) {
      return v * 2;
    }
  }
}


class C {
  @init:decorator accessor
  p = 10;
}

const c = new C();
console.assert(c.test === 10);
console.assert(c.p === 20);