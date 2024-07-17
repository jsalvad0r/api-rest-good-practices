'use strict'
import fp from "fastify-plugin";
import Sensible from '@fastify/sensible'

export default fp(async function (fastify, opts) {
  fastify.register(Sensible, {
    errorHandler: false
  })
})
