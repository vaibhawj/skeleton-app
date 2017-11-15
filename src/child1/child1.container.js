import {connect} from 'react-redux';
import DumbComponent from './child1.component';

const mapStateToProps = (state) => {
    return {
        num: state.child1Reducer.num
    }
}

export const increment = () => dispatch => {
    dispatch({type:'INCREMENT'})
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: () => {
            dispatch(increment())
        }
    }
}

const Child1 = connect(mapStateToProps, mapDispatchToProps)(DumbComponent);

export default Child1;