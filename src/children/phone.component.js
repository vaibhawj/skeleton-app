import React from 'react';

class Phone extends React.Component {

    shouldComponentUpdate(nextProps) {
        // console.log(nextProps.phone === this.props.phone)
        console.log(nextProps.profile === this.props.profile)

        return true;
    }

    render(){
        let phoneRef = null;
        // console.log('rendering phone');
        return (
            <div> 
                Phone: <input type="text" ref={input => phoneRef = input}/>
                <button onClick={e => this.props.updateProfile('phone', phoneRef && phoneRef.value)}>Update Phone</button>
                Last saved phone: {this.props.profile.phone }
            </div>
        )
    }
}

export default Phone;