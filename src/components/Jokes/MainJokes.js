import React from 'react';
import Jokes from './Jokes';
import jokesData from './jokesData';

const MainJokes = () => {

    const jokesComponents = jokesData.map((joke) => {
        return(
        <Jokes 
            key={joke.id}
            question={joke.question}
            punchline={joke.punchline}
        />)
    })

    return(
        <div>
            {jokesComponents}
        </div>)
}

export default MainJokes