function decorator (value, context) {
  context.addInitializer(function () {
    this.test = 10;
  })
}

@init:decorator
class C {
}

console.assert(C.test === 10);