
module.exports = function walker (obj, filter, handler, parent) {
  const next = (obj, key) =>
    ( typeof obj[ key ] === 'object' && obj[key] !== null) &&
    walker (obj[ key ], filter, handler, obj);
  if (Array.isArray(obj)) {
    for (let key = 0; key < obj.length; key++) {
      next(obj, key);
    }
  } else {
    for (let key in obj) {
      obj.hasOwnProperty (key)  && next(obj, key);
    }
  }
  if (filter (obj)) {
    handler (obj, parent);
  }
}