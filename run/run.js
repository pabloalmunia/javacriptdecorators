const fs        = require ('fs');
const parse     = require ('../parser/index.js');
const transpile = require ('../transpiler/index.js');

(
  new Function (
    transpile (
      parse (
        fs.readFileSync ( process.argv[ 2 ] )
      )
    )
  )
) ();