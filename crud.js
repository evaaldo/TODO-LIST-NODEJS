import { sql } from "./database.js";

export class Crud {

    async create(task) {
        const { id,atividade,status } = task

        await sql`INSERT INTO todo (id,atividade,status) VALUES (${id},${atividade},${status})`
    }

    async read() {
        const tasks = await sql`SELECT * FROM todo`

        return tasks
    }

    async update(idTask, task) {
        const idUp = idTask
        const { id,atividade,status } = task

        await sql`UPDATE todo SET id=${id}, atividade=${atividade}, status=${status} WHERE id=${idUp}`
    }

    async delete(idDelete) {
        await sql`DELETE FROM todo WHERE id=${idDelete}`
    }

}