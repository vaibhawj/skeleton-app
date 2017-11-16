import {connect} from 'react-redux';
import { createAction } from 'redux-act';
import DumbComponent from './child1.component';

export const increment = createAction('INCREMENT');

const mapStateToProps = (state) => {
    return {
        num: state.child1Reducer.num
    }
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