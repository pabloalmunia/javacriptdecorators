function deco(value, name) {
  return {
    initialize(v) {return v * 2}
  }}
class C {
  @deco static accessor P = 10;
}

console.assert(C.P === 20);