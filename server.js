import fastify from "fastify"
import { Crud } from "./crud.js"

const server = fastify({logger: true})

// CREATE
server.post('/todo', (req,res) => {
    
})

// READ
server.get('/todo', (req,res) => {
    res.send('hello')
})

// UPTATE
server.put('/todo/:id', (req,res) => {

})

// DELETE
server.delete('/todo/:id', (req,res) => {

})

// Inicia o servidor
server.listen({port: 3000}, () => console.log('Servidor iniciado!'))