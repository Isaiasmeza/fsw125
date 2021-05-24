const express = require("express")
const app = express()

app.use(express.json())

app.use("/bounty", require("./bountyRouter"))
app.listen(4000, () => {
    console.log("Server Success Port: 4000.")
})