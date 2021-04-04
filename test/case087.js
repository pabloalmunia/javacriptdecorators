function deco(value, name) {
  return {
    initialize(v) {return v * 2}
  }}
class C {
  @deco accessor static P = 10;
}

console.assert(C.P === 20);