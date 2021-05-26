const express = require("express")
const app = express()

app.use(express.json())

app.use("/todo", require("./todoRouter"))

app.listen(4000, () => {
    console.log("Server success Port: 3000.")
})