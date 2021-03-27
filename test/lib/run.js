const fs        = require ('fs');
const path      = require ('path');
const equal     = require ('./equal.js');
const EXT_ERROR = '.err';

module.exports = (EXT_TEST, EXT_RESULT, serializer) => {
  
  function readTest (test) {
    return fs.readFileSync (path.join (__dirname, `../${ test }${ EXT_TEST }`)).toString ();
  }
  
  function readResult (test, result) {
    try {
      return require (path.join (__dirname, `../${ test }${ EXT_RESULT }`));
    } catch (err) {
      fs.writeFileSync (
        path.join (__dirname, `../${ test }${ EXT_RESULT }`),
        serializer ? serializer (result) : result
      );
      console.log (`created ${ test }${ EXT_RESULT }`);
      return null;
    }
  }
  
  return function run (test, transform) {
    console.log ('test', test);
    const originSource = readTest (test);
    const origin = transform (originSource);
    const result = readResult (test, origin);
    if (result) {
      if (!equal (origin, result)) {
        fs.writeFileSync (
          path.join (__dirname, `../${ test }${ EXT_RESULT }${ EXT_ERROR }`),
          serializer ? serializer (origin) : origin
        );
        console.error (`ERROR in ${ test }`);
      }
    }
  };
};
