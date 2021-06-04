function decorator (value, context) {
  context.addInitializer(function() {
    this.test = 10;
  });
  return {
    initialize (v) {
      return v * 2;
    },
    set(v) {
      value.set.call(this, v * 2);
    }
  }
}


class C {
  @init:decorator
  accessor static p = 10;
}

console.assert(C.test === 10);
console.assert(C.p === 20);
C.p = 20
console.assert(C.p === 40);
