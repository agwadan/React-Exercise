import React from 'react';
import Jokes from './Jokes';

const MainJokes = () => {
    return(
        <div>
        <Jokes 
            Joke={{
                question: "What do you call a Witch that lives in the desert?",
                punchline: "A sand Witch"
            }}
        />
        <Jokes 
            Joke={{
                question: "What happens when a chicken lays an egg at the top of a hill?",
                punchline: "You get an egg roll"
            }}
        />
        <Jokes 
            Joke={{punchline: "It's hard to explain a pun to a kleptomaniac because they take things literally."}}
        />
</div>    )
}

export default MainJokes