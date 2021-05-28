const express = require("express")
const app = express()

app.use(express.json())

app.use("/bounty", require("./bountyRouter"))
app.listen(5000, () => {
    console.log("Server Success Port: 5000.")
})