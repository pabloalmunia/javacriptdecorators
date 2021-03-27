const recast = require ('recast');

module.exports = (ast) => {
  const code = recast.print (ast, {tabWidth: 2}).code;
  return code;
};
