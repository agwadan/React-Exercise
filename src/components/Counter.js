import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(){
        super()
        this.state = {
            count: 0
        }

        this.handleClick = this.handleClick.bind(this) //This is necessary every time you're going to use setState()
    }

    handleClick = () => {
        this.setState((prevState)=>{
            return{
                count: prevState.count + 1
            }
        })
    }

    render() {
        return (
            <div>
                <h2> {this.state.count} </h2>
                <button onClick={this.handleClick}> Count </button>
            </div>
        )
    }
}
