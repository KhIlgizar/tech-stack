﻿'use strict'

const fp = require('fastify-plugin')

/*
* This plugins adds some utilities to handle jwt
*/

module.exports = fp(async function(fastify, opts) {
  fastify.register(require("@fastify/jwt"), {
    secret: process.env.SECRET_KEY
  })

  fastify.decorate("authenticate", async function(request, reply) {
    try {
      await request.jwtVerify()
    } catch (err) {
      reply.send(err)
    }
  })
})
