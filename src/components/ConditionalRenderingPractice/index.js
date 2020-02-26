import React, { Component } from 'react'
import LoggedIn from './LoggedIn'

export default class ConditionalRenderingPractice extends Component {
    constructor(){
        super()
        this.state = {
            isLoggedIn: false
        }
        this.logIn = this.logIn.bind(this);
    }

    logIn(){
        this.setState(prevState => {
            return{
                isLoggedIn: !prevState.isLoggedIn
            }
        })
    }

    render() {
        return (
            <div>
                {!this.state.isLoggedIn ? 
                <h4>Please Log in</h4> :
                <LoggedIn/>}

                <button onClick={this.logIn}>
                    {this.state.isLoggedIn ?
                    <p>LOG OUT</p> :
                    <p>LOG IN</p>    
                }
                       
                </button>
            </div>
        )
    }
}
