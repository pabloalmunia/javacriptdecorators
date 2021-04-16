/**
 *
 * @after (fn)
 *
 * Execute the function passed as parameter after the method, getter, setter or accessor call.
 * The function passed as parameter receives as parameter the previous function return.
 * If the function returns an value, this value is used as method return instead of the original return.
 *
 * @param {function({any}): {any}} fn - function called after the method
 * @returns {function}
 *
 */
module.exports = function after (fn) {
  return function (value, context) {
    
    if (['method', 'getter', 'setter'].includes (context.kind)
    ) {
      return _after(value, fn);
    }
    
    if (['init-method', 'init-getter', 'init-setter'].includes (context.kind)
    ) {
      return {
        [ context.kind === 'init-method' ?
          'method' :
          context.kind === 'init-getter' ?
            'get' :
            'set' ] : _after(value, fn)
      };
    }
    
    if (context.kind === 'auto-accessor') {
      return {
        get: _after(value.get, fn),
        set: _after(value.set, fn)
      }
    }
    
    function _after(prev, next) {
      return function (...args) {
        const result = prev.call (this, ...args)
        return next.call (this, result) ?? result
      }
    }
  };
}

class C {

  #p = 0;
  
  @before (anotherFuction)
  get p () {
    return this.#p;
  }

  @after (anotherFunction)
  set p (v) {
    return this.#p = v;
  }

}

// const c = new C ();
// c.p     = 10;
// console.log (c.p);
// c.r = 20;
// console.log (c.r);
// console.log (c.hello ());