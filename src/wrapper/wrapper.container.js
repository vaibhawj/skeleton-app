import {connect} from 'react-redux';
import DumbComponent from './wrapper.component';

const mapStateToProps = (state) => {
    return {

    }
}

const validateAndDispatch = () => {
    return (dispatch, getState) => {
        const state = getState();
        console.log(state);
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleSaveClick: (inputRef) => {
            console.log(inputRef);
            const res = inputRef.selector.props.validate();
            console.log(res);
           // dispatch(validateAndDispatch()) 
        }
    }
}

const Wrapper = connect(mapStateToProps, mapDispatchToProps)(DumbComponent);

export default Wrapper;