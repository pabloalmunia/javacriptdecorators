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
  #multi = 2;
  
  @decorator1
  @decorator2
  #double(v) {
    return v * this.#multi;
  }
  checker(v) {
    return this.#double;
  }
}

console.assert(new C().checker().one === 1)
console.assert(new C().checker().two === 2)