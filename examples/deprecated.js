function deprecated(...args) {
  let msg;
  if (typeof args[0] === 'string' || typeof args[0] === 'undefined') {
    msg = args[0]
    return decorator
  }
  return decorator(...args)
  
  function  decorator (value, context) {
  
    if (['method', 'getter', 'setter'].includes (context.kind)) {
      return _deprecated (value);
    }
  
    if (['init-method', 'init-getter', 'init-setter'].includes (context.kind)) {
      return {
        [ context.kind === 'init-method' ?
          'method' :
          context.kind === 'init-getter' ?
            'get' :
            'set' ] : _deprecated (value)
      };
    }
  
    if (context.kind === 'auto-accessor') {
      return {
        get : _deprecated (value.get),
        set : _deprecated (value.set)
      };
    }
  
    if (context.kind === 'class') {
      const result = class extends value {
        constructor () {
          message();
          super ();
        }
      }
      result.name  = context.name;
      return result;
    }
    
    if (context.kind === 'init-class') {
      return {
        initialize() {
          message();
        }
      }
    }
    
    function _deprecated (fn) {
      return function (...args) {
        message();
        return fn.call (this, ...args);
      };
    }
    function message() {
      if (msg) {
        console.log(msg)
      } else {
        console.log (context.name, 'is deprecated');
      }
    }
  }
}

@init:deprecated
class Old {
  
  @deprecated
  m() {}
  
  @deprecated accessor
  p = 10;
  
  @deprecated()
  get q() {}
  
  @deprecated('please, don\'t use this getter of q property' )
  set q(v) {}
  
}

const o = new Old();
o.m();
o.p = o.p + 10;
o.q = o.q + 10;