class C {
  @decorator1
  @decorator2
  get p() {
    return 'a';
  }
}

const a = new C();
console.assert(a.p === 'b')