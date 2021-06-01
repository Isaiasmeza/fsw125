import React from "react"
import axios from "axios"


class Form extends React.Component {
    constructor() {
        super()
        this.state = ({
            firstName: "",
            lastName: "",
            reward: "",
            
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
    handleSubmit(e) {
        e.preventDefault()
        const bounty = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            reward: this.state.reward,
        }
        axios.post("/bounty", bounty)
            .then(res => this.props.getBounties())
    }
    render() {
        return (
            <div>
                <h1>Bounty Hunter</h1>
                <form onSubmit={this.handleSubmit} id="newEntry">
                    <label> Enter First Name: 
                        <input type="text" name="firstName" onChange={this.handleChange} placeholder="First name"/>
                    </label>

                    <label> Enter Last Name: 
                        <input type="text" name="lastName" onChange={this.handleChange} placeholder="last name" />
                    </label>

                    <label> Reward: 
                        <input  type="text" name="reward" onChange={this.handleChange} placeholder="Reward Price" />
                    </label>
                    <button>Submit</button>

                </form>
            </div>
        )
    }
}
export default Form;