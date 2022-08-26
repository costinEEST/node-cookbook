/**
 * https://www.fastify.io/docs/latest/Reference/Server/#listen
 * https://nodejs.org/api/process.html#processexitcode
 * https://www.fastify.io/docs/latest/Reference/Server/#register
 * https://www.fastify.io/docs/latest/Reference/Plugins
 * */

const fastify = require("../node_modules/fastify/fastify")();

fastify.register(require("./09-fastify-routes"));

fastify.listen({ port: process.env.PORT || 3000 }, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }

  console.log(`server listening on: ${address}`);
});
