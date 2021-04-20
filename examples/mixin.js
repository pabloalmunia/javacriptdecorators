const EXTENSION_METADATA = Symbol ();

function Extends (extension) {
  if (arguments.length !== 1 || typeof extension !== 'function') {
    return console.error ('@Extends( extension ) decorator needs a class extension as parameter');
  }
  return function (value, context) {
    if (context.kind !== 'class') {
      return console.error ('@Extends( extension ) decorator is only applicable to classes');
    }
    for (let key of getProperties (extension.prototype)) {
      const directive        = extension.prototype[ Symbol.metadata ] &&
        extension.prototype[ Symbol.metadata ][ key ] &&
        extension.prototype[ Symbol.metadata ][ key ][ EXTENSION_METADATA ] || 'override';
      value.prototype[ key ] = ({
        discard: function (origin) {
          return origin;
        },
        override: function (origin, target) {
          return target;
        },
        before: function (origin, target) {
          return function (...args) {
            target.call(this, ...args);
            return origin.call(this, ...args);
          }
        },
        after: function (origin, target) {
          return function (...args) {
            const result = origin.call(this, ...args);
            target.call(this, ...args);
            return result;
          }
        },
        around: function (origin, target) {
          return function (...args) {
            return target.call(this, [origin, ...args]);
          }
        },
      })[directive](value.prototype[ key ], extension.prototype[ key ]);
    }
  };
}

function Extension (value, context) {
  if (context.kind !== 'class') {
    return console.error ('@Extension decorator is only applicable to classes');
  }
}


function Override (value, context) {
  context.defineMetadata (EXTENSION_METADATA, 'override');
}

function Discard (value, context) {
  debugger;
  context.defineMetadata (EXTENSION_METADATA, 'discard');
}

function Before (value, context) {
  context.defineMetadata (EXTENSION_METADATA, 'before');
}

function Around (value, context) {
  context.defineMetadata (EXTENSION_METADATA, 'around');
}

function After (value, context) {
  context.defineMetadata (EXTENSION_METADATA, 'after');
}


function getProperties (obj) {
  const proto = Object.getPrototypeOf (obj);
  return (
    (proto !== Object.prototype && proto !== null ? getProperties (proto) : [])
      .concat (Object.getOwnPropertyNames (obj))
      .concat (Object.getOwnPropertySymbols (obj))
      .filter (function (item, pos, result) {
        return result.indexOf (item) === pos;
      })
  );
}

const S = Symbol ();

class A extends null {
  @After
  a () {
    console.log('A.a');
  }
  @Discard
  [ S ] () {
  }
}

@Extends (A)
class AA {
  a() {
    console.log('AA.a');
  }
  aa () {
  }
}

console.log (getProperties (AA.prototype));
(new AA()).a();
