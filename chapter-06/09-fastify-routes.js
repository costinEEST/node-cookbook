module.exports = async (fastify) => {
  fastify.get("/", async () => ({ message: "Hello from Fastify." }));
};
