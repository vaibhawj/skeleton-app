import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import GrandParent, {allReducers} from '../index';

const store = createStore(combineReducers({ ...allReducers }), applyMiddleware(thunk));

storiesOf('Stories', module)
  .addDecorator(story => <Provider store={store}>{story()}</Provider>)
  .add('Parent', () => <GrandParent />);
