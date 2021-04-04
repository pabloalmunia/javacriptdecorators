function addProperty(key, value) {
  return (klass, context) => {
    if (context.kind === 'init-method' ||  context.kind === 'init-getter' || context.kind === 'init-setter') {
      return {
        initialize() {
          this[key] = value;
        }
      }
    }
  }
}

class C {
  constructor() {
    this.z = 100;
  }
  @init:addProperty('a', 1)
  @init:addProperty('b', 2)
  static set p(v) {}
}

class D extends C {
  @init:addProperty('c', 3)
  @init:addProperty('d', 4)
  static set p(v) {}
}

console.assert(C.a === 1);
console.assert(C.b === 2);
console.assert(C.c === undefined);
console.assert(C.d === undefined);

console.assert(D.a === 1);
console.assert(D.b === 2);
console.assert(D.c === 3);
console.assert(D.d === 4);
