export default function appliedOrder(description) {
  return function (el, context) {
    console.log(
      (description || '?') + '.- order has been applied over a',
      (context.isStatic ? 'static ' : '') + context.kind,
      context.isPrivate ? 'private' : `with name "${ context.name }"`
    );
  }
}
