function decorator1(value, context) {
  if (context.kind === "method") {
    value.one = 1;
  }
}
function decorator2(value, context) {
  if (context.kind === "method") {
    value.two = 2;
  }
}

class C {
  @decorator1
  @decorator2
  #m () {}
  check () {
    return this.#m;
  }
}

console.assert(new C().check().one === 1);
console.assert(new C().check().two === 2);