import {connect} from 'react-redux';
import { createAction } from 'redux-act';
import DumbComponent from './child1.component';

export const increment = createAction('inc', (incrementer) => ({incrementer}));

const mapStateToProps = (state) => {
    return {
        num: state.child1Reducer.num,
        incrementer: state.child1Reducer.incrementer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: () => {
            dispatch(increment('child1'))
        }
    }
}

const Child1 = connect(mapStateToProps, mapDispatchToProps)(DumbComponent);

export default Child1;