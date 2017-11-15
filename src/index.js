import Wrapper from './wrapper/wrapper.container';
import wrapperReducer from './wrapper/wrapper.reducer';
import child1Reducer from './child1/child1.reducer';
import child2Reducer from './child2/child2.reducer';

export default Wrapper;

export const allReducers={
    wrapperReducer,
    child1Reducer,
    child2Reducer
}

export {Parent} ;