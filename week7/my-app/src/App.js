import React, { useEffect, useState } from "react"
import Item from "./Item"
import Form from "./Form"
import axios from "axios"


function App() {
  const [items, setItems] = useState([])
  const [filterItems, setFilterItems] = useState([])

  function getItems() {
    axios.get("/items")
      .then(res => {
        setFilterItems(res.data)
        setItems(res.data)
      })
      .catch(err => console.log(err))
  }
  useEffect(() => {
    getItems()
  }, [])

  function handleDelete(event) {
    event.preventDefault()
    const id = event.target.parentNode.id

    axios.delete(`/${id}`)
      .then(getItems)
      .catch(err => console.log(err))
  }


  function handlePricePut(event, param) {
    event.preventDefault()
    const id = event.target.parentNode.id
    axios.put(`/${id}`, { price: param })
      .then(getItems)
      .catch(err => console.log(err))
  }
  async function handleFilter(event, param) {
    event.preventDefault()
    await axios.get(`/search/type?type=${param}`)
      .then(res => setFilterItems(res.data))
      .then(res => console.log(`Filter results:`))
      .catch(err => console.log(err))
  }

  function resetItems() {
    console.log(items)
    setFilterItems(items)
  }
  return (
    <div>
      <Form handleReset={resetItems} handleFilter={handleFilter} getItems={getItems} />
      <div>
        {filterItems.map(item =>
          <Item getItems={getItems}
            {...item}
            key={item._id}
            costPut={handlePricePut}
            delete={handleDelete} />
        )}
      </div>


    </div>
  );
}
export default App