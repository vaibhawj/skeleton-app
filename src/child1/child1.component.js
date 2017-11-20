import React from 'react';

const Child1 = ({num, incrementer, handleClick}) => {
    return (
        <div>
            incremented by {incrementer}
            <br/>
            Child1: {num}
            <br/>
            <button onClick={handleClick}>Increment</button>
        </div>
    )
}

export default Child1;