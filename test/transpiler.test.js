const EXT_TEST   = '.result.json';
const EXT_RESULT = '.result.js';
const run        = require ('./lib/run.js') (EXT_TEST, EXT_RESULT);
const transpiler = require ('../transpiler/index.js');

run ('case00', (ast) => transpiler (JSON.parse(ast)));

