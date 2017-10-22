import React from 'react';
import Input from './input.container';

const validateAndSave = async (validateFn) => {
    let res = await validateFn();
    if(res){
        console.log('can save');
    } else {
        console.log('can not save');
    }
}

const Wrapper = ({num}) => {
    let inputRef = null;
    return (
        <div>
            <Input ref={input => inputRef = input} num={num}/>
            <button onClick={e => validateAndSave(inputRef.selector.props.validate)}>Save</button>
        </div>
    )

}

export default Wrapper;