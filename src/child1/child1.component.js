import React from 'react';

const Child1 = ({num, incrementer, handleClick}) => {
    return (
        <div>
            Child1: {num} incremented by {incrementer}
            <br/>
            <button onClick={handleClick}>Increment</button>
        </div>
    )
}

export default Child1;