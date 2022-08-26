/**
 * https://www.fastify.io/docs/latest/Reference/Server/#listen
 * https://nodejs.org/api/process.html#processexitcode
 * */

const fastify = require("../node_modules/fastify/fastify")();

// fastify.get("/", async (request, reply) => {
//   return { message: "Hello world!" };
// });

fastify.route({
  method: "GET",
  url: "/",
  handler: async (_, reply) => {
    reply.send({ message: "Hello world!" });
  },
});

fastify.listen({ port: process.env.PORT || 3000 }, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }

  console.log(`server listening on: ${address}`);
});
