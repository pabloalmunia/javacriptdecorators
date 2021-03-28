const fs        = require ('fs');
const path      = require ('path');
const equal     = require ('./equal.js');
const EXT_ERROR = '.err';
const readFile  = (file) => fs.readFileSync (path.join (__dirname, file)).toString ();
const writeFile = (file, data) => fs.writeFileSync (path.join (__dirname, file), data);
const words     = (source) => source
  .split (/\s|\(|\)/)
  .filter (x => x)
  .map (x => x.substring (0, 1) === '_' ? '_' : x);

module.exports = (label, EXT_TEST, EXT_RESULT, transform, stringify, parse) => {
  
  function readTest (test) {
    return readFile (`../${ test }${ EXT_TEST }`);
  }
  
  function readResult (test) {
    try {
      const sourceResult = readFile (`../${ test }${ EXT_RESULT }`);
      return parse ? parse (sourceResult) : sourceResult;
    } catch (err) {
      return null;
    }
  }
  
  function writeResult (test, source) {
    writeFile (
      `../${ test }${ EXT_RESULT }`,
      stringify ? stringify (source) : source
    );
    console.log (label, `created ${ test }${ EXT_RESULT }`);
  }
  
  function writeError (test, source) {
    writeFile (
      `../${ test }${ EXT_ERROR }${ EXT_RESULT }`,
      stringify ? stringify (source) : source
    );
    console.log (label, `ERROR, created ${ test }${ EXT_ERROR }${ EXT_RESULT }`);
  }
  
  return function run (test) {
    console.log ('test', label, test);
    const originSource = readTest (test);
    const origin       = transform (originSource);
    const result       = readResult (test);
    if (!result) {
      return writeResult (test, origin);
    }
    if (typeof origin === 'object' ?
      !equal (origin, result) :
      !equal (words (origin), words (result))) {
      writeError (test, origin);
    }
  };
};

