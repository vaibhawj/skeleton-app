import DumbChild from './child.component';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        value: state.childReducer.value
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleChange: (value) => {
            dispatch({type: 'CHANGE', value})
        }
    }
}

const Child = connect(mapStateToProps, mapDispatchToProps)(DumbChild);

export default Child;
