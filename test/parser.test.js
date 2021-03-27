const EXT_TEST = '.js';
const EXT_RESULT = '.result.json';
const run = require ('./lib/run.js') (
  EXT_TEST,
  EXT_RESULT,
  (code) => JSON.stringify (code, null, 2)
);
const parser = require ('../parser/index.js');

run ('case00', parser);

