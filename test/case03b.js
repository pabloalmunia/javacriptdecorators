const MY_META = Symbol();

function myMeta(value, context) {
  context.defineMetadata("my-meta", true);
  context.defineMetadata(MY_META, true);
  return class extends C {
  }
}

@myMeta
class C {
}

console.log(C[Symbol.metadata]);