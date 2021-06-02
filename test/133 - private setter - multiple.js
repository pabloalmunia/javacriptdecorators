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
  #q = 0;
  
  @decorator1
  @decorator2
  set #p (v) {
    this.#q = v;
  }
  
  get #p () {
    return this.#q;
  }
  
  get check() {
    return this.#p;
  }
  set check(v) {
    this.#p = v;
  }
}

const c = new C ();
console.assert(c.check === 0);
c.check = 1;
console.assert(c.check === 6);