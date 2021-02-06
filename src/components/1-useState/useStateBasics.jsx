import React, { useState } from 'react';

const UseStateBasics = () => {
    const [name, setName] = useState('Agwa');

    const handleClick = () => {
        setName('Clarkson');
    }
    return (
        <React.Fragment>
            <h2>{name}</h2>
            <button
                className='btn btn-primary'
                onClick={handleClick}
            >
                Change Name
            </button>
        </React.Fragment>
    )

}

export default UseStateBasics;