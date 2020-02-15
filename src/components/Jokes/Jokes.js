import React from 'react'

class Jokes extends React.Component {
    render()
    {
        return (
        <div>
            <h3 style={{display: this.props.question ? "block" : "none"}}>Question: {this.props.question}</h3>
            <h4>Punchline: {this.props.punchline}</h4>
        </div>
    )
}
}

export default Jokes
