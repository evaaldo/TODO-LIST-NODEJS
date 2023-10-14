import fastify from "fastify"
import { Crud } from "./crud.js"

const server = fastify()
const crud = new Crud()

// CREATE
server.post('/todo', async (req,res) => {
    const { id,atividade,status } = req.body

    await crud.create({
        id,
        atividade,
        status
    })

    return res.send()
})

// READ
server.get('/todo', async (req,res) => {
    const tasks = await crud.read()

    return tasks
})

// UPTATE
server.put('/todo/:id', async (req,res) => {
    const idTask = req.params.id
    const { id,atividade,status } = req.body

    await crud.update(idTask, {
        id,
        atividade,
        status
    })

    return res.send()
})

// DELETE
server.delete('/todo/:id', async (req,res) => {
    const idDelete = req.params.id

    await crud.delete(idDelete)

    return res.send()
})

// Inicia o servidor
server.listen({
    host: '0.0.0.0',
    port: process.env.port ?? 3000
}, () => {
    console.log('Servidor iniciado!')
})