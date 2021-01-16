import React from 'react';

function Book(pips) {

    const {title, origin} = pips; //-------------- destructuring the "pips"

    console.log(pips);
    return (
        <div>
            <h2>{title} is a good Presenter from {origin}.</h2>
        </div>
    );
}

export default Book