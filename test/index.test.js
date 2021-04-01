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
run ('case000');

// Class
run ('case001');
run ('case002');
run ('case003');
run ('case003b');
run ('case004');
run ('case005');
run ('case006');
run ('case007');

// Method
run ('case011');
run ('case012');
run ('case013');
run ('case014');
run ('case015');

// Getter
run ('case021');
run ('case022');
run ('case023');
run ('case024');
run ('case025');

// Setter
run ('case031');
run ('case032');
run ('case033');
run ('case034');
run ('case035');

// Field
run ('case041');
run ('case042');
run ('case043');
run ('case044');
run ('case045');
runParse ('case049');

// Static method
run ('case051');
run ('case052');
run ('case053');
run ('case054');
run ('case055');

// // Static getter
run ('case061');
run ('case062');
run ('case063');
run ('case064');
run ('case065');

// Static setter
run ('case071');
run ('case072');
run ('case073');
run ('case074');
run ('case075');

// Static field
run ('case081');
run ('case082');
run ('case083');
run ('case084');
run ('case085');

// Private Method
run ('case091');
run ('case092');
run ('case093');
run ('case094');
run ('case095');

// Private Getter
run ('case101');
run ('case102');
run ('case103');
run ('case104');
run ('case105');
//
// Private Setter
run ('case111');
run ('case112');
run ('case113');
run ('case114');
run ('case115');

// Other examples
run ('example01');