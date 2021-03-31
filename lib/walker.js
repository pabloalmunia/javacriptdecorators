/**
 *
 * @param {object} base      - base object
 * @param {function} filter  - function filter
 * @param {function} handler - function handler
 * @param {object} [parent]  - parent object
 */
module.exports = function walker (base, filter, handler, parent) {
  const next = (obj, key) =>
    (typeof obj[ key ] === 'object' && obj[ key ] !== null) &&
    walker (obj[ key ], filter, handler, obj);
  if (Array.isArray (base)) {
    for (let key = 0; key < base.length; key++) {
      next (base, key);
    }
  } else {
    for (let key in base) {
      base.hasOwnProperty (key) && next (base, key);
    }
  }
  if (filter (base)) {
    handler (base, parent);
  }
};