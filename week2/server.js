const express = require ("express")
const app = express()

const home = "Welcome to the site "
const info = "The info page"
const orders = "viewing all orders"

app.get("/", (req, res) => {
  res.send(home)
})

app.get("/info", (req, res) => {
  res.send(info)
})

app.get("/orders", (req, res) => {
  res.send(orders)
})


app.listen(3000, () => {
  console.log("Server is running")
})