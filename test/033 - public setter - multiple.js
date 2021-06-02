function decorator1 (value, context) {
  if (context.kind === 'setter') {
    return function (v) {
      value.call (this, v * 2);
    };
  }
}

function decorator2 (value, context) {
  if (context.kind === 'setter') {
    return function (v) {
      value.call (this, v * 3);
    };
  }
}

class C {
  #p = 0;
  
  @decorator1
  @decorator2
  set p (v) {
    this.#p = v;
  }
  
  get p () {
    return this.#p;
  }
}

const c = new C ();
console.assert(c.p === 0);
c.p = 1;
console.assert(c.p === 6);