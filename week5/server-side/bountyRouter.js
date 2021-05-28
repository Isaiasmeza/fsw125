const express = require("express")
const bountyRouter = express.Router()
const { v4: uuid } = require('uuid')

const bounties = [
  {
    firstName: "Ricky (The Slasher)",
    lastName: "Cardoves",
    reward: "500",
    _id: uuid()
  },
  {
    firstName: "Danny (The Ghost)",
    lastName: "Phantom",

    reward: "5000",
    _id: uuid()
  },
  {
    firstName: "Tom (The Reaper)",
    lastName: "Valentine",
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
bountyRouter.put('/:bountyId', (req, res) => {
  const bountyId = req.params.bountyId
  const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
  const updateBounty = Object.assign(bounties[bountyIndex], req.body)
  res.send(updateBounty)
})

bountyRouter.delete('/:bountyId', (req, res) => {
  const bountyId = req.params.bountyId
  const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
  bounties.splice(bountyIndex, 1)
  res.send("Bounty Removed!")
})

module.exports = bountyRouter