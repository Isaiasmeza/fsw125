const express = require("express")
const bountyRouter = express.Router()
const { v4: uuid } = require('uuid')

const bounties = [
    {
        firstName: "Ricky (The Slasher)",
        lastName: "Cardoves",
        wanted: "Dead Or Alive",
        reward: "500",
        _id: uuid()
    },
    {
        firstName: "Danny (The Ghost)",
        lastName: "Phantom",
        wanted: "Dead",
        reward: "5000",
        _id: uuid()
    },
    {
        firstName: "Tom (The Reaper)",
        lastName: "Valentine",
        wanted: "Dead Or Alive",
        reward: "50000",
        _id: uuid()
    }
]

bountyRouter.get("/", (req, res) => {
    res.send(bounties)
})

bountyRouter.post("/", (req, res) => {
    const bounty = req.body;
    bounty._id = uuid();
    bounties.push(bounty)
    res.send(`Bounty: ${bounty.firstName} ${bounty.lastName} added!`)
})
module.exports = bountyRouter