import React from "react"
import axios from "axios"

class Form extends React.Component {
    constructor() {
        super()
        this.state = ({
            name: "",
            type: "",
            price: "",
            filter: "Clothing"
        })
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }
    handleSubmit(event) {
        event.preventDefault()
        const item = {
            name: this.state.name,
            cost: this.state.cost,
            type: this.state.type
        }
        axios.post('/items', item)
            .then(res => this.props.getItems())
            .catch(error => console.log(error))
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Enter New Item</label><br />
                    <input
                        type="text"
                        onChange={this.handleChange}
                        name="name"
                        placeholder="Enter New Item"
                    />
                    <br />

                    <label>Enter Items Cost</label><br />
                    <input
                        onChange={this.handleChange}
                        type="number"
                        name="cost"
                        placeholder="Enter Price"
                    />
                    <br />

                    <label>Enter Type of Item</label><br />
                    <input
                        onChange={this.handleChange}
                        type="text"
                        name="type"
                        placeholder="Enter Type of Item"
                    /><br />

                    <button>Add Item</button>
                    <hr />
                </form>

                <form onSubmit={(event) => this.props.handleFilter(event, this.state.filter)}>
                    <label>Filter by Category
            <select value={this.state.filter} onChange={this.handleChange} name="filter">
                            <option value="Clothing">Clothing</option>
                            <option value="luggage">luggage</option>
                        </select>
                    </label>
                    <button>Search</button>
                </form>
                <button onClick={this.props.handleReset}>Reset</button>
            </div>
        )
    }
}


export default Form