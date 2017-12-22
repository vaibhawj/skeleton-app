import React from 'react';
import Child from '../child/child.container';

class Parent extends React.Component {

    render() {
        let childRef = null;
        return (
            <div>
                Parent
            <br />
                <Child id="child" ref={input => childRef = input} />
                <br />
                <br />
                <input id="btn" type="button" value="Check" onClick={e => this.props.handleClick(childRef)} />
            </div>
        )
    }
}

export default Parent;