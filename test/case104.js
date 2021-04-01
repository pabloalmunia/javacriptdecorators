function decorator1 (value, context) {
  context.defineMetadata ('one', 1);
}

function decorator2 (value, context) {
  context.defineMetadata ('one', 1);
  context.defineMetadata ('two', 2);
}

class C {
  @decorator1
  @decorator2
  get #p () {
    return 'a';
  }
}

const a = new C ();
console.assert (a.p === 'a');
console.log (C.prototype[ Symbol.metadata ]);