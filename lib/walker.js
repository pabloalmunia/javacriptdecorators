/**
 *
 * @param {object} base      - base object
 * @param {function} filter  - function filter
 * @param {function} handler - function handler
 * @param {object} [parent]  - parent object
 * @param {boolen} [reverse=false] - reverse array
 */
module.exports = function walker (base, filter, handler, parent, reverse = false) {
  const next = (obj, key) =>
    (typeof obj[ key ] === 'object' && obj[ key ] !== null) &&
    walker (obj[ key ], filter, handler, obj, reverse);
  if (Array.isArray (base)) {
    if (reverse) {
      for (let key = base.length; key ; key--) {
        next (base, key - 1);
      }
    } else {
      for (let key = 0; key < base.length; key++) {
        next (base, key);
      }
    }
  } else {
    if (reverse) {
      const keys = Object.keys(base);
      for (let n = keys.length; n ; n--) {
        const key = keys[n - 1];
        next (base, key);
      }
    } else {
      for (let key in base) {
        base.hasOwnProperty (key) && next (base, key);
      }
    }
  }
  if (filter (base)) {
    handler (base, parent);
  }
};