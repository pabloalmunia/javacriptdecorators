function deco1(value, context) {
  return {
    get() {
      return value.get.call(this) * 2;
    },
    set(v) {
      value.set.call(this, v / 3);
    }
  }
}

function deco2(value, context) {
  return {
    get() {
      console.log(context.name, 'get')
      return value.get.call(this);
    },
    set(v) {
      console.log(context.name, 'set', v)
      return value.set.call(this, v);
    },
    initialize() {
      return 20;
    }
  }
}
class C {
  @deco1
  @deco2
  accessor
  #p  = 10;
  get check() {
    return this.#p
  }
  set check(v) {
    this.#p = v
  }
}

const c = new C();
debugger;
console.assert(c.check === 40);
c.check = 3;
console.assert(c.check === 2);
