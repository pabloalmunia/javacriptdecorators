function decorator (value, context) {
  if (context.kind === 'method') {
    context.addInitializer(function() {
      this.test = 20;
    });
    return function (v) {
      return value.call(this, v * 2)
    };
  }
}

@init:decorator
class C {
  @init:decorator
  static M (n) {
    return n * 2;
  }
}

console.assert(C.test === 20);
console.assert(C.M (2) === 8);