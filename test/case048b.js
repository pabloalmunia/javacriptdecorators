function deco1 (value, context) {
  if (context.kind === 'auto-accessor') {
    return {
      set (v) {
        value.set.call (this, v * 2);
      }
    };
  }
}

function deco2 (value, context) {
  if (context.kind === 'auto-accessor') {
    return {
      set (v) {
        value.set.call (this, v * 3);
      }
    };
  }
}

class C {
  @deco1
  @deco2
  accessor
  p;
}

const c = new C ();
c.p     = 10;
console.log (c.p);