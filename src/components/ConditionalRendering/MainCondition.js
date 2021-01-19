import React, { Component } from 'react'
import Conditional from './Conditional'

export default class MainCondition extends Component {

  constructor() {
    super()
    this.state = {
      isLoading: true,
      unreadMessages: [
        "Your mum called.",
        "Hi"
      ]
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    }, 1500)
  }

  render() {
    return (
      <div>
        {this.state.isLoading ?
          <h5>Hold On...</h5> :
          <Conditional />}

        {this.state.unreadMessages.length > 0 &&
          <h4>You have {this.state.unreadMessages.length} unread messages.</h4>
        }
      </div>
    )
  }
}
