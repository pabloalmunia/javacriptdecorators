// Libraries
const fs        = require ('fs');
const path      = require ('path');
const parse     = require ('../../parser/index.js');
const transpile = require ('../../transpiler/index.js');
const equal     = require ('./equal.js');

// Constants
const TEST      = '../';
const RESULT    = '../result/';
const EXT_ERROR = '.err';

// Helpers
const readFile  = (file) => fs.readFileSync (path.join (__dirname, file)).toString ();
const writeFile = (file, data) => fs.writeFileSync (path.join (__dirname, file), data);
const delFile   = (file) => fs.unlinkSync (path.join (__dirname, file));
const words     = (source) => source
  .split (/\s|\(|\)|\.|\[|]/)
  .filter (x => x)
  .map (x => x.substring (0, 1) === '_' ? '_' : x.substring (0, 2) === '#_' ? '#_' : x);

// Constructor
function CheckByFile (label, getTest, getResult, transform, stringify, parse) {
  
  function readTest (test) {
    return readFile (getTest (test));
  }
  
  function readResult (test) {
    try {
      const sourceResult = readFile (`${ getResult (test) }`);
      return parse ? parse (sourceResult) : sourceResult;
    } catch (err) {
      return null;
    }
  }
  
  function writeResult (test, source) {
    writeFile (
      `${ getResult (test) }`,
      stringify ? stringify (source) : source
    );
    // console.log (label, `created ${ getResult (test) }`);
  }
  
  function writeError (test, source) {
    writeFile (
      `${ getResult (test) }${ EXT_ERROR }`,
      stringify ? stringify (source) : source
    );
    // console.log (label, `ERROR, created ${ getResult (test) }${ EXT_ERROR }`);
    throw new Error (`${ label } - ERROR, created ${ getResult (test) }${ EXT_ERROR }`);
  }
  
  function delError (test) {
    try {
      delFile (`${ getResult (test) }${ EXT_ERROR }`);
    } catch (err) {
      void (0);
    }
  }
  
  return function run (test) {
    // console.log ('test', label, test);
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
}

// runParse
const runParse = CheckByFile (
  'parse',
  (f) => `${ TEST }${ f }.js`,
  (f) => `${ RESULT }${ f }.result.json`,
  parse,
  (code) => JSON.stringify (code, null, 2),
  (text) => JSON.parse (text)
);

// runTranspiler
const runTranspiler = CheckByFile (
  'transpile',
  (f) => `${ RESULT }${ f }.result.json`,
  (f) => `${ RESULT }${ f }.result.js`,
  (ast) => transpile (JSON.parse (ast))
);

// runTest
const runTest = (f) => {
  const nativeAssert    = global.console.assert;
  global.console.assert = (result, msg) => {
    nativeAssert.apply (this, arguments);
    if (!result) {
      throw new Error (`Assertion failed on test ${ f } ${ msg || '' }`);
    }
  };
  require (`${ RESULT }${ f }.result.js`);
  global.console.assert = nativeAssert;
};


module.exports = {
  runParse,
  runTranspiler,
  runTest
};


