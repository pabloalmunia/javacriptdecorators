const fastify = require ('fastify') ({logger : true});
const path    = require ('path');
const parser  = require ('./parser/index.js');

fastify.register (require ('fastify-static'), {
  root   : path.join (__dirname, './public'),
  prefix : '/'
});

fastify.post('/parser/', (req, res) => {
  const result = parser(req.body);
  return result;
});

(async () => {
  try {
    await fastify.listen (3000);
  } catch (err) {
    fastify.log.error (err);
    process.exit (1);
  }
}) ();