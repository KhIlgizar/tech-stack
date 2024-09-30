'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return { root: true }
  });

  fastify.get('/login', async function (request, reply) {
    const token = fastify.jwt.sign({});
    reply.send({token});
  });

  fastify.get('/test', {onRequest: [fastify.authenticate]}, async function (request, reply) {
    return request.user;
  });
}
