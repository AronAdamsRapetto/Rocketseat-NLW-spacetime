import fastity from 'fastify'
import cors from '@fastify/cors'
import { memoriresRoutes } from './routes/memories'

const app = fastity()

app.register(memoriresRoutes)
app.register(cors, {
  origin: true,
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP server listening on port 3333')
  })
