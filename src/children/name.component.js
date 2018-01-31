import React from 'react';

class Name extends React.Component {

    shouldComponentUpdate(nextProps) {
        // console.log(nextProps.name === this.props.name)
        console.log(nextProps.profile === this.props.profile)
        
        return true;
    }
    
    render(){   
        let nameRef = null;
        // console.log('rendering name');
        return (
            <div>
                Name: <input type="text" ref={input => nameRef = input}/>
                <button onClick={e => this.props.updateProfile('name', nameRef && nameRef.value)}>Update Name</button>
                Last saved name: {this.props.profile.name}
            </div>
        )
    }

}
export default Name;