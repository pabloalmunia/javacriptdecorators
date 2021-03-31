function decorator(value, context) {
  if (context.kind === "method") {
    value.extra = true;
  }
}

class C {
  @decorator
  static M() {}
}

console.log(C.M.extra);