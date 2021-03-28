const unique = () => Math.random().toString(32).substring(2);

function decorator(klass) {
  const  u = unique();
  klass.prototype[u] = function() { return u; }
}
@init:decorator
class C {
}

@init:decorator
class B extends C {
}

new B (1);