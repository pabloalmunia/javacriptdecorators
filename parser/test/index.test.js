const fs         = require ('fs');
const path       = require ('path');
const parser     = require ('../index.js');
const equal      = require ('./lib/equal.js');
const EXT_TEST   = '.js';
const EXT_RESULT = '.result.json';

run ('case01');
// run ('case02');
// run ('case03');
// run ('case30');
// run ('case31');

function run (test) {
  console.log ('test', test);
  const ast    = parser (readTest (test));
  const result = readResult (test, ast);
  if (result) {
    if (!equal (ast, result)) {
      console.error (JSON.stringify (ast, null, 2));
    }
  }
}

function readTest (test) {
  return fs.readFileSync (path.join (__dirname, `./${ test }${ EXT_TEST }`)).toString ();
}

function readResult (test, ast) {
  try {
    return require (path.join (__dirname, `./${ test }${ EXT_RESULT }`));
  } catch (err) {
    fs.writeFileSync (path.join (__dirname, `./${ test }${ EXT_RESULT }`), JSON.stringify (ast, null, 2));
    console.log (`created ${ test }${ EXT_RESULT }`);
    return null;
  }
}
