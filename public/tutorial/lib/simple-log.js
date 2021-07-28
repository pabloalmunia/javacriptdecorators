export default function simpleLog (level) {
  return function (method, context) {
    if (context.kind !== 'method') {
      return;
    }
    return function(...args) {
      const result = method.apply(this, args);
      console[level] (`method ${ context.name } called width parameters ${ args.join(', ') } and return ${ result }`, );
      return result;
    }
  };
}
