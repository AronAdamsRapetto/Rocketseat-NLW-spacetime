import 'dotenv/config'

import fastity from 'fastify'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import { memoriresRoutes } from './routes/memories'
import { authRoutes } from './routes/auth'

const app = fastity()

app.register(cors, {
  origin: true,
})

app.register(jwt, {
  secret: 'spacetime',
})

app.register(memoriresRoutes)
app.register(authRoutes)

app
  .listen({
    port: 3333,
    host: '0.0.0.0',
  })
  .then(() => {
    console.log('HTTP server listening on port 3333')
  })
