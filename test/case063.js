class C {
  @decorator1
  @decorator2
  static get P() {
    return 'a';
  }
}

console.assert(C.p === 'a')