const fs        = require ('fs');
const path      = require ('path');
const equal     = require ('./equal.js');
const EXT_ERROR = '.err';
const readFile  = (file) => fs.readFileSync (path.join (__dirname, file)).toString ();
const writeFile = (file, data) => fs.writeFileSync (path.join (__dirname, file), data);
const delFile   = (file) => fs.unlinkSync (path.join (__dirname, file));
const words     = (source) => source
  .split (/\s|\(|\)|\.|\[|]/)
  .filter (x => x)
  .map (x => x.substring (0, 1) === '_' ? '_' : x.substring (0, 2) === '#_' ? '#_' : x);

module.exports = (label, getTest, getResult, transform, stringify, parse) => {
  
  function readTest (test) {
    return readFile (`../${ getTest (test) }`);
  }
  
  function readResult (test) {
    try {
      const sourceResult = readFile (`../${ getResult (test) }`);
      return parse ? parse (sourceResult) : sourceResult;
    } catch (err) {
      return null;
    }
  }
  
  function writeResult (test, source) {
    writeFile (
      `../${ getResult (test) }`,
      stringify ? stringify (source) : source
    );
    console.log (label, `created ${ getResult (test) }`);
  }
  
  function writeError (test, source) {
    writeFile (
      `../${ getResult (test) }${ EXT_ERROR }`,
      stringify ? stringify (source) : source
    );
    console.log (label, `ERROR, created ${ getResult (test) }${ EXT_ERROR }`);
  }
  
  function delError (test) {
    try {
      delFile (`../${ getResult (test) }${ EXT_ERROR }`);
    } catch (err) {
      void (0);
    }
  }
  
  return function run (test) {
    console.log ('test', label, test);
    delError (test);
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

