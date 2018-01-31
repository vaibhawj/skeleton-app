import {connect} from 'react-redux';
import DumbGrandParent from './grandparent.component';

const mapStateToProps = (state) => {
    return {
        profile: state.grandparentReducer.profile
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
            updateProfile: (fieldName, value) => {
            dispatch({type: 'UPDATE_PROFILE', fieldName, value})
        }
    }
}

const GrandParent = connect(mapStateToProps, mapDispatchToProps)(DumbGrandParent);

export default GrandParent;