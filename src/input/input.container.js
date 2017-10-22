import {connect} from 'react-redux';
import InputComponent from './input.component';
import { validateNum } from './input.validations';

const mapStateToProps = (state, ownProps) => {
    state.inputReducer.num = state.inputReducer.num === undefined ? 
                        ownProps.num : state.inputReducer.num;
    return {
        num: format(state.inputReducer.num),
        msg: state.inputReducer.msg
    }
}

const format = value => {
    if(!value)
        return value;

    const part1 = value.substring(0, 3);
    const part2 = value.substring(3, 6);
    const part3 = value.substring(6, 10);

    if(!part2){
        return part1;
    } else if(!part3){
        return `(${part1}) ${part2}`;
    }

    return `(${part1}) ${part2}-${part3}`;
}

const deformat = value => {
    if(!value)
        return value;

    return value.replace('(', '').replace(')', '').replace(' ', '').replace('-', '');
}

const hasOnlyNumbers =(str) => {
    const regex = /^\d+$/;
    return regex.test(str);
}

const validateAndDispatch = () => {
    return (dispatch, getState) => {
        const state = getState().inputReducer;
        let msg =  validateNum(state.num);
        console.log("Msg:"+msg);
        dispatch({type:'VALIDATE', msg});
        return msg === 'Valid number';
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleChange: e =>  {
            
            let value = deformat(e.target.value);
            if(!value || hasOnlyNumbers(value)) {
                dispatch({type:'SET', value})
            }
        },
        validate: e => {
            return dispatch(validateAndDispatch());
        }
    }
}

const Input = connect(mapStateToProps, mapDispatchToProps)(InputComponent);

export default Input;