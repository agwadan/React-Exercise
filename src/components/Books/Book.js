import React from 'react';

function Book(pips) {

    console.log(pips);
    return (
        <div>
            <h1>{pips.title} is a good Presenter</h1>
        </div>
    );
}

export default Book