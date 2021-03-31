function decorator(value, context) {
  if (context.kind === "method") {
    value.extra = true;
  }
}

class C {
  @decorator
  m() {}
}

console.log(new C().m.extra);