import {createReducer} from 'redux-act';
import {increment} from './child1.container';

const initialState = {
    num: 0
}

const child1Reducer = createReducer({
    [increment]: (state) => {
        const num = state.num + 1;
        return {
            ...state,
            num
        }
    }
}, initialState)

export default child1Reducer;