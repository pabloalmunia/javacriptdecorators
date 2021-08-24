function getClass (klass) {
  console.log(klass.name)
  return function(value, context) {}
}

try {

  class A {
    @getClass (A)
    a() {}
  }
  console.assert(false)

} catch(e) {
  console.assert(e.message === "Cannot access 'A' before initialization")
}
