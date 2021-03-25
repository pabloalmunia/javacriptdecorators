const fs     = require ('fs');
const path   = require ('path');
const parser = require ('../index.js');
const equal  = require ('./lib/equal.js');

run ('case01');
run ('case02');
run ('case03');
run ('case30');
run ('case31');

function run (test, save) {
  console.log ('test', test);
  const ast    = parser (readJS (test));
  const result = equal (ast, readJSON (test));
  if (!result) {
    console.error (JSON.stringify (ast, null, 2));
  }
}

function readJS (test) {
  return fs.readFileSync (path.join (__dirname, `./${ test }.js`)).toString ();
}

function readJSON (test) {
  try {
    return require (path.join (__dirname, `./${ test }.json`));
  } catch (err) {
    return {};
  }
}
