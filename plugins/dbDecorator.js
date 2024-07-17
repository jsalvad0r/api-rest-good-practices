import fp from "fastify-plugin";
import { loadModel } from "../db/loadModel.js";

export default fp(async (fastify) => {
  fastify.decorate("db", await loadModel());
});
