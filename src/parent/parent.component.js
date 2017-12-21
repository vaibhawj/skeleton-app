import React from 'react';
import Child from '../child/child.container';

class Parent extends React.Component {

    render() {
        return (
            <div>
                Parent
            <br />
                <Child id="child" ref="childRef" />
                <br />
                <br />
                <input id="btn" type="button" value="Check" onClick={e => this.props.handleClick(this.refs.childRef.selector.props.value)} />
            </div>
        )
    }
}

export default Parent;