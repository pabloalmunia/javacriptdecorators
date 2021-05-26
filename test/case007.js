function logged (value, {kind, name, addInitializer}) {
  if (kind === 'class') {
    if (addInitializer) {
      addInitializer (function () {
        console.log (`finished defining ${ this.name }`);
      });
    }
    return class extends value {
      constructor (...args) {
        super ();
        console.log (`constructing an instance of ${ name } with arguments ${ args.join (', ') }`);
      }
    }
  }
  
  // ...
}

@init:logged
class C {
}

new C (1);