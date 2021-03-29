const parse        = require ('../parser/index.js');
const transpile    = require ('../transpiler/index.js');
const Run          = require ('./lib/run.js');
const runParse     = Run (
  'parse',
  (f) => `${ f }.js`,
  (f) => `result/${ f }.result.json`,
  parse,
  (code) => JSON.stringify (code, null, 2),
  (text) => JSON.parse (text)
);
const runTranspile = Run (
  'transpile',
  (f) => `result/${ f }.result.json`,
  (f) => `result/${ f }.result.js`,
  (ast) => transpile (JSON.parse (ast))
);

function run (test) {
  runParse (test);
  runTranspile (test);
}

// Without decorators
run ('case00');

// Class
run ('case01');
run ('case02');
run ('case03');
run ('case03b');
run ('case04');
run ('case05');
run ('case06');
run ('case07');

// Method
run ('case11');
run ('case12');
run ('case13');
run ('case14');
run ('case15');

// Getter
run ('case21');
run ('case22');
run ('case23');
run ('case24');
run ('case25');

// Setter
run ('case31');
run ('case32');
run ('case33');
run ('case34');
run ('case35');

// Field
run ('case41');
run ('case42');
run ('case43');
run ('case44');
run ('case45');