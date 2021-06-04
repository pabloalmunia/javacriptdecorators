function decorator (value, context) {
  context.addInitializer(function () {
    this.test = 10;
  });
}


class C {
@init:decorator
  p = 1
}

console.assert(new C().p === 1);
console.assert(new C().test === 10);