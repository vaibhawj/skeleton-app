import React from 'react';
import Child1 from '../child1/child1.container';
import Child2 from '../child2/child2.container';

const Wrapper = ({num, handleSaveClick}) => {
    let inputRef = null;
    return (
        <div>
            <Child1 />
            <br/><br/>
            <Child2 />
        </div>
    )

}

export default Wrapper;