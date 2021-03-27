function logged (value, {kind, name}) {
  if (kind === 'init-class') {
    return {
      definition : class extends value {
        constructor (...args) {
          super ();
          console.log (`constructing an instance of ${ name } with arguments ${ args.join (', ') }`);
        }
      },
      
      initialize (value) {
        console.log (`finished defining ${ this.name }`);
      }
    };
  }
  
  // ...
}

@init:logged
class C {
}

new C (1);