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
  get #p() {}
}

class D extends C {
  @init:addProperty('c', 3)
  @init:addProperty('d', 4)
  get #p() {}
}

const c = new C();
console.assert(c.a === 1);
console.assert(c.b === 2);
console.assert(c.c === undefined);
console.assert(c.d === undefined);

const d = new D();
console.assert(d.a === 1);
console.assert(d.b === 2);
console.assert(d.c === 3);
console.assert(d.d === 4);
