import React, {Component} from "react"

export default class State extends Component {

  constructor(props) {
    super(props)

    this.state= {
      count : 0
    }
  }

  counterIncrement = () => {
    this.setState({
      count: this.state.count + 1
    })
  } 

  counterdecrement = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  render() {
    const {count} = this.state
    return(
      <div>
        <h1> React counter app </h1>
        <p>Count: {count} </p>
        <button className="click-btn" onClick={this.counterIncrement}> + </button>
        <button className="click-btn" onClick={this.counterdecrement} disabled= {count === 0 ? true : false}> - </button>
      </div>
    )
  }
}

