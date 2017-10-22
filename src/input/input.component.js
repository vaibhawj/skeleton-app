import React from 'react';

const errorStyle = {color:'red'};
const okStyle = {color:'green'};

const InputComponent = ({num, handleChange, msg}) => {

    return (
        <div>
            Phone: <input type="text" maxLength="14"
            value={num}
            onChange={handleChange} />
            <br />
            <span style={msg==='Valid number'?okStyle:errorStyle}>{msg}</span>
        </div>
    )
}

export default InputComponent;