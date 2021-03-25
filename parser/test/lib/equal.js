/**
 * Object comparison (equivalent with same all enumerable properties and equal constructor)
 * @param {object} objectA - first object to comparison
 * @param {object} objectB - second object to comparison
 * @returns {boolean}
 */
const EQUAL     = true;
const NOT_EQUAL = false;
module.exports  = function equal (objectA, objectB) {
  const aStack = [],                             // Stack array
        bStack = [];
  return (function check (a, b) {
    if (a === b) {                               // Strict comparison
      return EQUAL;
    }
    const aType = typeof a,                      // Get value types
          bType = typeof b;
    if (aType !== bType) {                       // Different type is a not equal value from this point
      return NOT_EQUAL;
    }
    if (aType === 'number' &&                    // Special case: Not is a Number (NaN !== NaN)
      isNaN (a) &&
      isNaN (b)) {
      return EQUAL;
    }
    
    if (aType === 'object') {                    // Objects
  
      if (a === null || b === null) {            // if one is null, they are different
        return NOT_EQUAL;
      }
  
      if (
        typeof a.valueOf === 'function' &&         // valueOf() is a function in both values
        typeof b.valueOf === 'function' &&
        (a !== a.valueOf () || b !== b.valueOf ())
      ) {
        return (
          a.valueOf () === b.valueOf () &&
          a.constructor === b.constructor);        // Check if equal
      }
  
      if (aStack.indexOf (a) > -1 &&             // Check if the object has been previously processed
        bStack.indexOf (b) > -1) {
        return EQUAL;
      }
      let aKeys = Object.keys (a);               // Get properties keys
      let bKeys = Object.keys (b);
      if (aKeys.length !== bKeys.length) {       // Check number of properties
        return NOT_EQUAL;
      }
      if (aKeys.length > 0) {
        aStack.push (a);                         // Storage objects into stacks for recursive references
        bStack.push (b);
        let i = aKeys.length;
        while (i--) {                            // Check each property value (recursive call)
          const key = aKeys[ i ];
          if (!check (a[ key ], b[ key ])) {
            return NOT_EQUAL;
          }
        }
      }
      return EQUAL;
    }
    return NOT_EQUAL;                            // Not equal
  }) (objectA, objectB);
};
