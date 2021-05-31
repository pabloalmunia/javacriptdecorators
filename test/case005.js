function defineElement(name) {
  return function(value, context) {
    value.prototype.name = name
  }
}

@defineElement("my-class")
class C {
}

console.assert(C.prototype.name === "my-class");