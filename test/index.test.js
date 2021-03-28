const parse =   require ('../parser/index.js');
const transpile            = require ('../transpiler/index.js');
const Run = require ('./lib/run.js');
const runParse             = Run (
  'parse',
  '.js',
  '.result.json',
  parse,
  (code) => JSON.stringify (code, null, 2),
  (text) => JSON.parse (text)
);
const runTranspile         = Run (
  'transpile',
  '.result.json',
  '.result.js',
  (ast) => transpile (JSON.parse (ast))
);

function run (test) {
  runParse (test);
  runTranspile (test);
}

// run ('case00');
//
// run ('case01');
// run ('case02');
// run ('case03');
// run ('case03b');
// run ('case04');
// run ('case05');
// run ('case06');
run ('case07');

// run ('case11');
// run ('case12');
// run ('case13');
// run ('case14');
// run ('case15');