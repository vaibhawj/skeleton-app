import React from 'react';

const Child2 = ({handleClick}) => {
    return (
        <div >
            Child2
            <br />
            <button onClick={handleClick}>Increment</button>

        </div>
    )
}

export default Child2;