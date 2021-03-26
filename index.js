const fastify = require ('fastify') ({logger : true});
const path    = require ('path');
const parser  = require ('./parser/index.js');
const DESA    = process.env.DESA;
const rute    = DESA ? '/parser' : '/';

if (DESA) {
  fastify.register (require ('fastify-static'), {
    root   : path.join (__dirname, './public'),
    prefix : '/'
  });
}

fastify.post (rute, (req, res) => {
  try {
    return parser (req.body);
    ;
  } catch (err) {
    return {ERROR : err.message};
  }
});

(async () => {
  try {
    await fastify.listen (3000);
  } catch (err) {
    fastify.log.error (err);
    process.exit (1);
  }
}) ();