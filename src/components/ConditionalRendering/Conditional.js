import React from 'react'

export default function Conditional(props) {

    if(props.isLoading === true){
        return(
            <h2>Hold on...</h2>
        )
    }

    return (
        <div>
            <h1>I am exhausted.</h1>
        </div>
    )
}
