/**
 *
 * @param {object} obj
 * @param {array} match
 * @returns {string|undefined}
 */
module.exports = function find(obj, match) {
  return (function search(o, path) {
    const result = [];
    for (let check of match) {
      if (
        (typeof o[check[0]] !== 'undefined' && typeof check[1] === 'undefined') ||
        o[check[0]] == check[1]
      ) {
        result.push(true);
      }
    }
    if (result.length === match.length) {
      return path;
    }
    for (let key of Object.keys(o)) {
      if (typeof o[key] === 'object' && o[key] !== null) {
        const pathReturn = search(o[key], path + '.' + key);
        if (pathReturn) {
          return pathReturn;
        }
      }
    }
  })(obj, '');
};
