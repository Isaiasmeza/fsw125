import React from "react"
import axios from "axios"
 class Bounty extends React.Component{
    constructor(){
     super()
     this.state = ({
         isEditing: false,
         bounty: 0
     })
     this.handleChange = this.handleChange.bind(this)
     this.handlePut = this.handlePut.bind(this)
}
handleChange(event){
    const { name, value} = event.target
    this.setState({
        [name] : value
    })
}
handlePut(e){
    e.preventDefault()
    const id = this.props._id
    axios.put(`bounty/${id}`, {bounty: this.state.bounty})
    .then(res => {
        this.props.getBounties()
    })
    .then(this.setState({
        ...this.state,
        isEditing: false
    }))
    .catch(err => console.log(err))
}
render(){
    return(
        <div>
            <h1> {`${this.props.firstName} ${this.props.lastName}`} </h1>
            <h2> {`${this.props.reward}`} </h2>
            {this.state.isEditing ? <form onSubmit={this.handlePut}> <input type="text" onChange={this.handleChange} placeholder="New Bounty" name="bounty"/> <button>Add</button> </form>
            : <h2>{this.props.bounty}</h2>}

            <button onClick={() => {
                this.setState({
                    ...this.state,
                    isEditing: !this.state.isEditing
                })
            }}>Edit</button>

            <button onClick={(e) => {
                const id = this.props._id
               axios.delete(`/bounty/${id}`)
               .then(res => this.props.getBounties())
               .catch(err => console.log(err))
            }}>Remove</button>
        </div>
    )
}
}
export default Bounty
 