function deco(value, name) {
}

class C {
  @deco accessor p = 10;
}
const c = new C();

console.assert(c.p === 10);