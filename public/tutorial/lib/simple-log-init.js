export default function (method, context) {
  if (context.kind !== 'method') {
    return;
  }
  if (context.addInitializer) {
    context.addInitializer (function () {
      console.log (`new ${ this.constructor.name }() is called`);
    });
  }
  return function(...args) {
    const result = method.apply(this, args);
    console.log (`method ${ context.name } called width parameters ${ args.join(', ') } and return ${ result }`, );
    return result;
  }
}
