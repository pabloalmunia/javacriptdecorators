/**
 *
 * @logger
 *
 *
 * @param value
 * @param context
 * @returns {(function(...[*]) : *)|{}|{set : function(...[*]) : *, get : function(...[*]) : *}}
 */
function logger (value, context) {
  const msgAfter = (result) => console.log (context.name, 'return this value:', result);
  const msgBefore = (...args) => console.log (
    context.name,
    'is called with this parameters:',
    args.join (',') || '[]'
  );
  return after (msgAfter) (before (msgBefore) (value, context), context);
}

function after (fn) {
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

function before (fn) {
  return function (value, context) {
    
    if (['method', 'getter', 'setter'].includes (context.kind)
    ) {
      return _before (fn, value);
    }
    
    if (['init-method', 'init-getter', 'init-setter'].includes (context.kind)
    ) {
      return {
        [ context.kind === 'init-method' ?
          'method' :
          context.kind === 'init-getter' ?
            'get' :
            'set' ] : _before (fn, value)
      };
    }
    
    if (context.kind === 'auto-accessor') {
      return {
        get : _before (fn, value.get),
        set : _before (fn, value.set)
      }
    }
    
    function _before (prev, next) {
      return function (...args) {
        if (prev.call (this, args) !== false) {
          return next.call (this, ...args);
        }
      };
    }
  };
}


class C {
  @logger
  m () {
    return 10;
  }
  @logger accessor
  p = 0;
}

const c = new C()
c.m()
c.p = 10;
console.log(c.p)