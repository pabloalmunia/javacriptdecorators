function decorator(value, context) {
  if (context.kind === "method") {
    value.extra = true;
  }
}

class C {
  @decorator
  #m() {}
  checker() {
    return this.#m.extra
  }
}

console.log(new C().checker());