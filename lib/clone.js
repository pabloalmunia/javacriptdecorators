/**
 * Create a new object (empty) with same constructor
 * @param {object} obj - object as seed
 * @returns {object}   - new object
 */
function createOther (obj) {
  return obj === null ? null :
    Array.isArray(obj) ? [] :
    {};
}

/**
 * Clone a object (plain object and array)
 * @param {object} obj - object to clone
 * @returns {object}   - new object
 */
module.exports = function clone (obj) {
  const copy = obj === null ? null : Object.assign (createOther(obj), obj);
  for (let p in copy) {
    if (typeof copy[ p ] === 'object') {
      copy [ p ] = clone (copy[ p ]);
    }
  }
  return copy;
}
