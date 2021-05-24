const express = require("express")
const { v4: uuid } = require("uuid")
const bountyRouter = express.Router()

const bounty = [
    {
        firstName: "Rick",
        lastName: "gunslinger",
        living: true,
        bounty: 500,
        _id: uuid()
    },
    {
        firstName: "Jose",
        lastName: "Dart master",
        living: true,
        bounty: 5000,
        _id: uuid()
    },
    {
        firstName: "Mike",
        lastName: "slasher",
        living: true,
        bounty: 50000,
        _id: uuid()
    }
]
bountyRouter.get("/", (req, res) => {
    res.send(bounty)
})

bountyRouter.post("/", (req, res) => {
    const bounties = req.body
    bounty._id == uuid()
    bounty.push(bounty)
    res.send(`Bounty ${bounties.firstName} ${bounties.lastName} added!`)
})
bountyRouter.put("/bountyId"), (req,res) =>{
    const bountyId = req.params.bountyId 
    const bountyList = bounty.findIndex(bounty => bounty._id === bountyId)
    const updateBounty = Object.assign(bounties[bountyList], req.body)
    res.send(updateBounty)
}
module.exports = bountyRouter