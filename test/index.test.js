const PARSE_EXT_TEST       = '.js';
const PARSE_EXT_RESULT     = '.result.json';
const runParse             = require ('./lib/run.js') (
  PARSE_EXT_TEST,
  PARSE_EXT_RESULT,
  require ('../parser/index.js'),
  (code) => JSON.stringify (code, null, 2),
  (text) => JSON.parse (text)
);
const TRANSPILE_EXT_TEST   = '.result.json';
const TRANSPILE_EXT_RESULT = '.result.js';
const transpile            = require ('../transpiler/index.js');
const runTranspile         = require ('./lib/run.js') (
  TRANSPILE_EXT_TEST,
  TRANSPILE_EXT_RESULT,
  (ast) => transpile (JSON.parse (ast))
);

function run (test) {
  runParse (test);
  runTranspile (test);
}

run ('case00');
run ('case01');
run ('case02');

