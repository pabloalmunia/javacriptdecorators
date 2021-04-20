
const A = Symbol();

class C {
  accessor [A] = 10;
}

const c = new C();
console.assert(c[A] === 10);
c[A] = 20;
console.assert(c[A] === 20)