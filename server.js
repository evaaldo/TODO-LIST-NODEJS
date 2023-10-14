import fastify from "fastify"

const server = fastify({logger: true})

// Inicia o servidor
server.listen({port: 3000}, () => console.log('Servidor iniciado!'))