import { childReducer } from './child/child.reducer';
import { parentReducer } from './parent/parent.reducer';
import ParentContainer from './parent/parent.container';
import Parent from './parent/parent.component';
import Child from './child/child.container';

export const allReducers={
    childReducer,
    parentReducer
}

export {Child, Parent};

export default ParentContainer;