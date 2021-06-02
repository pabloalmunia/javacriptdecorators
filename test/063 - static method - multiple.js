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
  static m() {}
}

console.assert(C.m.one === 1);
console.assert(C.m.two === 2);