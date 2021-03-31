@decorator1
@decorator2
class C {
}

function decorator1(value) {
  value.prototype.a = 1;
}

function decorator2(value) {
  value.prototype.b = 2;
}

const c = new C();
console.log(c.a, c.b);