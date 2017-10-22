import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Wrapper from '../index';
import { allReducers } from '../index';

const store = createStore(combineReducers({ ...allReducers }), applyMiddleware(thunk));

storiesOf('Input', module)
  .addDecorator(story => <Provider store={store}>{story()}</Provider>)
  .add('with redux', () => <Wrapper num="1234567890" />);
