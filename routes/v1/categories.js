export async function categoriesRoutes(fastify, _opts) {
  fastify.get("/categories", async function (request, reply) {
    return { root: true };
  });
}
