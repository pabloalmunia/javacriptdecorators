/**
 *
 * @before(fn)
 *
 * Execute the function passed as parameter before the method, getter, setter or accessor.
 * The function passed as parameter receives all parameter passed to the target function.
 * If the function returns false, the method, getter or setter isn't called
 *
 * @param {function({array}): {void|boolean}} fn - function called before the method
 * @returns {decorator}
 *
 */
function before (fn) {
  return function (value, context) {
    
    if (['method', 'getter', 'setter'].includes (context.kind)
    ) {
      return _before(fn, value);
    }
    
    if (['init-method', 'init-getter', 'init-setter'].includes (context.kind)
    ) {
      return {
        [ context.kind === 'init-method' ?
          'method' :
          context.kind === 'init-getter' ?
            'get' :
            'set' ] : _before(fn, value)
      };
    }
    
    if (context.kind === 'auto-accessor') {
      return {
        get: _before(fn, value.get),
        set: _before(fn, value.set)
      }
    }
    
    function _before(prev, next) {
      return function (...args) {
        if (prev.call (this, args) !== false) {
          return next.call (this, ...args);
        }
      };
    }
  };
}

// class C {
//   #p = 0;
//
//   @init:before (() => console.log ('before get p'))
//   get p () {
//     return this.#p;
//   }
//
//   @init:before ((v) => v > 10)
//   set p (v) {
//     return this.#p = v;
//   }
//
//   @init:before (() => console.log ('before hello'))
//   hello () {
//     return 'hello world';
//   }
//
//   @before(() => console.log('before accessor')) accessor
//   r = 1;
//
// }

// const c = new C ();
// c.p     = 10;
// console.log (c.p);
// c.r = 20;
// console.log (c.r);
// console.log (c.hello ());