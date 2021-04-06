class C {
  static accessor
   P  = 10;
}

C.P = 20;
console.assert(C.P === 20);
C.P = 30
console.assert(C.P === 30);
const descriptor = Object.getOwnPropertyDescriptor(C, 'P')
console.assert(descriptor.get);
console.assert(descriptor.set);