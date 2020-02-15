import React from 'react'

function Jokes(props) {
    return (
        <div>
            <h3 style={{display: props.question ? "block" : "none"}}>Question: {props.question}</h3>
            <h4>Punchline: {props.punchline}</h4>
        </div>
    )
}

export default Jokes
