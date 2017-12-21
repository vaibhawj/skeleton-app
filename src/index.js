import { childReducer } from './child/child.reducer';
import { parentReducer } from './parent/parent.reducer';
import Parent from './parent/parent.container';
import Child from './child/child.container';

export const allReducers={
    childReducer,
    parentReducer
}

export {Child};

export default Parent;