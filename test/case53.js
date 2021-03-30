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
  static M() {}
}

console.log(C.M.one);
console.log(C.M.two);