import {createReducer} from 'redux-act';
import {increment} from './child1.container';

const initialState = {
    num: 0,
    incrementer: ''
}

const child1Reducer = createReducer({
    [increment]: (state, payload) => {
        const num = state.num + 1;
        return {
            ...state,
            num,
            incrementer: payload.incrementer
        }
    }
}, initialState)

export default child1Reducer;