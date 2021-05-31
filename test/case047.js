function deco(value, name) {
  return {
    initialize(v) {return v * 2}
  }}
class C {
  @deco accessor p = 10;
}
const c = new C();

console.assert(c.p === 20);