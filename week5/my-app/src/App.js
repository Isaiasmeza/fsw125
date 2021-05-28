import React, { useEffect, useState } from "react"
import axios from "axios"
import './App.css';
import Form from "./Form"
import Bounty from "./Bounty"

function App() {

  const [bounties, setBounties] = useState([])
  function getBounties() {
    axios.get("/bounty")
      .then(res => setBounties(res.data))
  }
  useEffect(() => {
    getBounties()
  })
  return (
    <div>
      <Form getBounties={getBounties} />

      {bounties.map(bounty => <Bounty getBounties={getBounties}{...bounty} key={bounty._id} />)}
    </div>
  )
}

export default App;
