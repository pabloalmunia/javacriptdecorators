function add(value, { kind, name }) {
  value.prototype.x = 10;
}

// Class
@add
class C {
}

console.log(new C().x);