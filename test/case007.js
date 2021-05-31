const log = [];
function logged (value, {kind, name, addInitializer}) {
  if (kind === 'class') {
    if (addInitializer) {
      addInitializer (function () {
        log.push (`finished defining ${ this.name }`);
      });
    }
    return class extends value {
      constructor (...args) {
        super ();
        log.push (`constructing an instance of ${ name } with arguments ${ args.join (', ') }`);
      }
    }
  }
  
  // ...
}

@init:logged
class C {
}

new C (1);
console.assert(log[0] === 'finished defining C');
console.assert(log[1] === 'constructing an instance of C with arguments 1');