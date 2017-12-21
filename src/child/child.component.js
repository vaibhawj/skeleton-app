import React from 'react';

class Child extends React.Component {
    render() {
        let inputRef = null;
        return (
            <div>
                Child
            <input type="text" value={this.props.value} onChange={e => this.props.handleChange(inputRef && inputRef.value)}
                    ref={input => inputRef = input} />
            </div>
        )
    }
}

export default Child;