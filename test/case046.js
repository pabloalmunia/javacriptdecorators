class C {
  accessor
  p  = 10;
}

const c = new C();
c.p = 20;
console.assert(c.p === 20);
c.p = 30
console.assert(c.p === 30);
const descriptor = Object.getOwnPropertyDescriptor(C.prototype, 'p')
console.assert(descriptor.get);
console.assert(descriptor.set);