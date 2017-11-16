import {createReducer} from 'redux-act';

const initState = {
    num: 0
}
import {increment} from './child1.container';
const child1Reducer = createReducer({
    [increment]: (state) => {
        const num = state.num + 1;
        return {
            ...state,
            num
        }
    }
}, {
    num: 0
})

export default child1Reducer;