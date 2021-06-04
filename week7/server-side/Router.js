const express = require("express")
const router = express.Router()
const {v4: uuid} = require ("uuid")
const items =[
{
    name : "Jeans",
    type: "Clothing",
    price: 29.99,
    _id: uuid()
  },
  {
    name : "Hoodie",
    type: "Clothing",
    price: 54.99,
    _id: uuid()
  },
  {
    name : "Backpack",
    type: "luggage",
    price: 26.99,
    _id: uuid()
  },
  {
    name : "Hat",
    type: "Clothing",
    price: 34.99,
    _id: uuid()
  },
  {
    name : "laptop case",
    type: "luggage",
    price: 14.99,
    _id: uuid()
  },
  {
    name : "Belt",
    type: "Clothing",
    price: 9.99,
    _id: uuid()
  }
]

router.get("/items", (req,res) => {
    res.status(201)
    res.send(items)
})

router.get("/:itemId", (req, res, next) => {
    const itemId = req.params.itemId
    const item = items.find(item => item._id === itemId)
    if(!item){
      const error = new Error("item not found.")
      res.status(500)
      return next(error)
    }
    res.status(200).send(item)
  })


  router.post("/", (req, res)=> {
    const item = req.body;
    item._id = uuid();
    items.push(item)
    res.status(200).send("New item added!")
  })

  router.put("/:itemId", (req, res) => {
    const itemId = req.params.itemId
    const itemIndex = items.findIndex(item => item._id === itemId)
    const updateItem = Object.assign(items[itemIndex], req.body)
    res.status(201).send(updateItem)
  })

  router.delete("/:itemId", (req, res)=> {
    const itemId = req.params.itemId
    const itemIndex = items.findIndex(item => item._id === itemId)
    items.splice(itemIndex, 1)
    res.send("item has been removed!")
  })
  module.exports = router