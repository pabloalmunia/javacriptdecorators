export default function simpleDecorator(el, context) {
  console.log(`simpleDecorator has been applied over a ${ context.kind } with name "${ context.name }"`)
}