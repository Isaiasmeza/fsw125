const express = require("express")
const app = express()

app.use(express.json())

app.use("/bounty", require("./bountyRouter"))

app.listen(3000, () => {
    console.log("Server success Port: 3000.")
})