/**
 *
 * @once
 *
 * The decorated method, getter, setter or accessor is invoked only once. Repeat calls
 * return the value of the first invocation.
 *
 * @returns {any}
 *
 */
export default function once (value, context) {
  
  if (['method', 'getter', 'setter'].includes (context.kind)
  ) {
    return _once (value);
  }
  
  if (['init-method', 'init-getter', 'init-setter'].includes (context.kind)
  ) {
    return {
      [ context.kind === 'init-method' ?
        'method' :
        context.kind === 'init-getter' ?
          'get' :
          'set' ] : _once (value)
    };
  }
  
  if (context.kind === 'auto-accessor') {
    return {
      get : _once (value.get),
      set : _once (value.set)
    };
  }
  
  function _once (fn) {
    let runned = false;
    let result;
    return function (...args) {
      if (runned) {
        return result;
      }
      runned = true;
      result = fn.call (this, ...args);
      return result;
    };
  }
}

// class C {
//   @once
//   init() {
//     console.log('initialize');
//     return Math.random() * 1000 | 0;
//   }
// }
//
// const c = new C();
// console.log(c.init());
// console.log(c.init());