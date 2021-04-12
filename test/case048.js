function deco(value, name) {
  return {
    set(v) {
      value.set.call(this, v * 2)
    }
  }}
class C {
  @deco accessor p;
}
const c = new C();
c.p = 10;
console.log(c.p);