function deco1(value, context) {
  return {
    set(v) {
      value.set.call(this, v * 2);
    }
  }
}
function deco2(value, context) {
  return {
    set(v) {
      value.set.call(this, v * 3);
    }
  }
}
class C {
  @deco1
  @deco2
  accessor
  static p;
}

C.p = 10;
console.log(C.p);