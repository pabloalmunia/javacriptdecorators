const fastify = require ('fastify') ({logger : true});
const path    = require ('path');
const parser  = require ('./parser/index.js');
const VERSION = require ('./package.json').version;

if (process.env.DESA) {
  fastify.register (require ('fastify-static'), {
    root   : path.join (__dirname, './public'),
    prefix : '/'
  });
  console.log('DESA mode')
}

fastify.post ('/parser/', (req) => {
  try {
    return parser (req.body);
  } catch (err) {
    return {ERROR : err.message};
  }
});

fastify.get ('/version/', () => {
    return {version : VERSION};
});

(async () => {
  try {
    await fastify.listen (3000);
  } catch (err) {
    fastify.log.error (err);
    process.exit (1);
  }
}) ();