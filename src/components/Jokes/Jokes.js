import React from 'react'

function Jokes(props) {
    return (
        <div>
            <h3 style={{display: props.Joke.question ? "block" : "none"}}>Question: {props.Joke.question}</h3>
            <h4>Punchline: {props.Joke.punchline}</h4>
        </div>
    )
}

export default Jokes
