import DumbParent from './parent.component';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: (value) => {
            console.log(value);
        }
    }
}

const Parent = connect(mapStateToProps, mapDispatchToProps)(DumbParent);

export default Parent;
