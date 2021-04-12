function deco(value, name) {
  return {
    initialize(v) {return v * 2}
  }}
class C {
  @deco accessor #p = 10;
  set check(v) {
    this.#p = v;
  }
  get check() {
    return this.#p;
  }
}
const c = new C();
c.check = 10;
console.log(c.check);