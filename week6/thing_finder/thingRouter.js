const express = require("express")
const thingRouter = express.Router()
const { v4: uuid } = require("uuid")


const things = [
    {
        "name": "Backpack",
        "price": "25.00",
        "type": "luggage",
        _id: uuid()
    },
    {
        "name": "Shoes",
        "price": "$75.00",
        "type": "Clothing",
        _id: uuid()
    },
    {
        "name": "Hoodie",
        "price": "$35.00",
        "type": "Clothing",
        _id: uuid()
    }
]
thingRouter.get("/", (req, res) => {
    res.send(things);
  });
  
  thingRouter.get("/:thingsId", (req, res) => {
    const thingsId = req.params.thingsId;
    const getThing = things.find((thing) => thing.id === thingsId);
    res.send(getThing);
  });
  
  thingRouter.get("/search/type", (req, res) => {
    const type = req.query.type;
    const foundThing = things.filter((thing) => thing.type === type);
    res.send(foundThing);
  });
  
  thingRouter.post("/", (req, res) => {
    const newThing = req.body;
    newThing.id = uuid();
    things.push(newThing);
    res.send(`New Entry in database.`);
  });
  
  thingRouter.put("/:thingsId", (req, res) => {
    const thingsId = req.params.thingsId;
    const thingIndex = things.findIndex((thing) => thing.id === thingsId);
    const updateObject = req.body;
    const updateThing = Object.assign(things[thingIndex], updateObject);
    res.send(updateThing);
  });
  thingRouter.delete("/:thingsId", (req, res) => {
    const thingsId = req.params.thingsId;
    const thingIndex = things.findIndex((thing) => thing.id === thingsId);
    things.splice(thingIndex, 1);
    res.send("Entry Deleted");
  });
  module.exports = thingRouter;