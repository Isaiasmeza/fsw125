const express = require("express")
const todoRouter = express.Router()
const { v4: uuid } = require("uuid")
const todo = [
    {
        "chore": "Walk the dog",
        "chore-complete": "No",
        "time": "9 am",
        "_id": uuid()

    },
    {
        "chore": "Do the dishes",
        "chore-complete": "yes",
        "time": "11 am",
        "_id": uuid()
    }
]

todoRouter.get("/", (req, res) => {
    res.send(todo)
})

todoRouter.post("/", (req, res) => {
    const todos = req.body;
    todos._id = uuid();
    todo.push(todos)
    res.send(`Todo added!`)
})
todoRouter.put("/:todosId", (req, res) => {
    const todosId = req.params.todosId
    const todosIndex = todo.findIndex(todos => todos._id === todosId)
    const updateTodos = Object.assign(todo[todosIndex], req.body)
    res.send(updateTodos)
})

todoRouter.delete("/:todosId", (req, res) => {
    const todosId = req.params.bountyId
    const todosIndex = todo.findIndex(todos => todos._id === todosId)
    todo.splice(todosIndex, 1)
    res.send("Chore Complete!")
})

module.exports = todoRouter