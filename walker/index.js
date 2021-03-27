module.exports = function walker (obj, filter, handler, parent) {
  for (let key in obj) {
    if (obj.hasOwnProperty (key)) {
      if (typeof obj[ key ] === 'object') {
        walker (obj[ key ], filter, handler, obj);
      }
      if (filter (obj)) {
        handler (obj, parent);
      }
    }
  }
}