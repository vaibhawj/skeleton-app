import {connect} from 'react-redux';
import DumbComponent from './child2.component';
import {increment} from '../child1/child1.container'

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: () => {
            dispatch(increment('child2'))
        }
    }
}

const Child2 = connect(mapStateToProps, mapDispatchToProps)(DumbComponent);

export default Child2;