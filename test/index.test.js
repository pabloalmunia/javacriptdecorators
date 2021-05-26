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

function run (testFile) {
  test(testFile, () => {
    runParse (testFile);
    runTranspile (testFile);
  })
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
run ('case008');

// Method
run ('case011');
run ('case012');
run ('case013');
run ('case014');
run ('case015');
run ('case016');
run ('case017');
run ('case018');

// Getter
run ('case021');
run ('case022');
run ('case023');
run ('case024');
run ('case025');
run ('case026');
run ('case027');
run ('case028');

// Setter
run ('case031');
run ('case032');
run ('case033');
run ('case034');
run ('case035');
run ('case036');
run ('case037');
run ('case038');

// Field
run ('case041');
run ('case042');
run ('case043');
run ('case044');
run ('case045');
run ('case046');
run ('case047b');
run ('case047');
run ('case047b');
run ('case048');
run ('case049');

// Static method
run ('case051');
run ('case052');
run ('case053');
run ('case054');
run ('case055');
run ('case056');
run ('case057');
run ('case058');


// // Static getter
run ('case061');
run ('case062');
run ('case063');
run ('case064');
run ('case065');
run ('case066');
run ('case067');
run ('case068');

// Static setter
run ('case071');
run ('case072');
run ('case073');
run ('case074');
run ('case075');
run ('case076');
run ('case077');
run ('case078');

// Static field
run ('case081');
run ('case082');
run ('case083');
run ('case084');
run ('case085');
run ('case086');
run ('case087');
run ('case088');

// Private Method
run ('case091');
run ('case092');
run ('case093');
run ('case094');
run ('case095');
run ('case096');
run ('case097');
run ('case098');

// Private Getter
run ('case101');
run ('case102');
run ('case103');
run ('case104');
run ('case105');
run ('case106');
run ('case107');
run ('case108');

// Private Setter
run ('case111');
run ('case112');
run ('case113');
run ('case114');
run ('case115');
run ('case116');
run ('case117');
run ('case118');

// Private Field
run ('case121');
run ('case122');
run ('case123');
run ('case124');
run ('case125');
run ('case126');
run ('case127');
run ('case128');

// Static Private Method
run ('case131');
run ('case132');
run ('case133');
run ('case134');
run ('case135');
run ('case136');
run ('case137');

// Static Private Getter
run ('case141');
run ('case142');
run ('case143');
run ('case144');
run ('case145');
run ('case146');

// Static Private Setter
run ('case151');
run ('case152');
run ('case153');
run ('case154');
run ('case155');
run ('case156');

// Static Private Field
run ('case161');
run ('case162');
run ('case163');
run ('case164');
run ('case165');
run ('case166');
run ('case167');
run ('case168');

// Symbols
run ('case170');
run ('case171');
run ('case172');
run ('case173');
run ('case174');
run ('case175');
run ('case176');
run ('case177');
run ('case178');
run ('case179');
run ('case180');
run ('case181');

// Other examples
run ('example01');