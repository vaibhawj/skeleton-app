import DumbParent from './parent.component';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: (childRef) => {
            console.log(childRef.selector.props.value);
        }
    }
}

const Parent = connect(mapStateToProps, mapDispatchToProps)(DumbParent);

export default Parent;
