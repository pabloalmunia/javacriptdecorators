function getClass (klass) {
  console.assert(!klass)
}

try {

  class A {
    @getClass (A)
    a () {
    }
  }

} catch(e) {
  console.assert(e.message === "Cannot access 'A' before initialization")
}
