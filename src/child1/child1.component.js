import React from 'react';

const Child1 = ({num, handleClick}) => {
    return (
        <div>
            Child1: {num}
            <br/>
            <button onClick={handleClick}>Increment</button>
        </div>
    )
}

export default Child1;