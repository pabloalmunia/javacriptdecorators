/**
 *
 * @abstract
 *
 * This decorator defines a class as abstract, i.e. it cannot be instantiated directly and needs
 * another class to inherit from it in order to be used.
 *
 * Kind: 'class'
 *
 * Warning: this decorator change the original class inherit.
 *
 */
function abstract (value, context) {
  const klass = class extends value {
    constructor () {
      super ();
      if (new.target === klass) {
        throw `"${ context.name }" is an abstract class and cannot be instantiated without an inherited class.`;
      }
    }
  }
  Object.defineProperty(klass, 'name', {value: context.name})
  return klass;
}


class R {
}

@abstract
class A {
}

class AA extends A {
}

const r  = new R ();
console.log('r', r);
const aa = new AA ();
console.log('aa', aa);
const a  = new A ();
console.log('a', a);