import React from "react"

class Item extends React.Component{
    constructor(){
        super()
        this.state =({
            cost: 0,
            isEditingPrice: false
            
        })
        this.handleChange = this.handleChange.bind(this)
        this.priceToggle = this.priceToggle.bind(this)
    }
    handleChange(event) {
        const { name, value } = event.target
        this.setState({
          [name]: value
        })
      }
      priceToggle() {
        this.setState({
          ...this.state,
          isEditingPrice: !this.state.isEditingPrice
        })
      }
      render() {

        return (
          <div id={this.props._id}>
            <h1>{this.props.name}</h1>
    
            <h3>Category: {this.props.type}</h3>
    
    
            {this.state.isEditingPrice ?
              <form onSubmit={(event) => {
                this.props.pricePut(event, this.state.price)
                this.priceToggle()
              }}>
                <input type="text" name="price" onChange={this.handleChange} />
                <button>Save Changes</button>
                <button onClick={() => this.priceToggle}>Cancel</button>
              </form> :
              <h5>{this.props.price} <button onClick={this.priceToggle}>Change Price</button></h5>}
    
    
          </div>
        )
      }
    }
    
    export default Item
    
