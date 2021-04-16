/**
 *
 * @final
 *
 * This decorator defines a class as final, i.e. it cannot be inherited by another class.
 *
 * Kind: 'class'
 *
 * Warning: this decorator change the original class inherit.
 *
 */
function final (value, context) {
  const klass = class extends value {
    constructor () {
      super ();
      if (new.target !== klass) {
        throw `"${ context.name }" is an final class and cannot be inherited.`;
      }
    }
  }
  Object.defineProperty(klass, 'name', {value: context.name})
  return klass;
}


class R {
}

@final
class A {
}

class AA extends A {
}

const r  = new R ();
console.log('r', r);
const a  = new A ();
console.log('a', a);
const aa = new AA ();
console.log('aa', aa);
