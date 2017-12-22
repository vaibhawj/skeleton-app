import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import chai, { expect, should } from 'chai';
import { shallow, mount } from 'enzyme';
import td from 'testdouble';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import {Parent, Child, allReducers } from '../index.js';

const store = createStore(combineReducers(allReducers));

Enzyme.configure({ adapter: new Adapter() })

describe('parent', () => {
    it('should render child', () => {
        const wrapper = mount(<Provider store={store}><Parent /></Provider>);

        const child = wrapper.find('#child');

        expect(child).to.be.not.null;

    })

    it('should invoke handleClick with child value', () => {
        const handleClick = td.function();
        const wrapper = mount(<Provider store={store}><Parent handleClick={handleClick}/></Provider>);

        const childRef = wrapper.find(Child).instance();
        childRef.selector.props.handleChange('test')

        expect(childRef.selector.props.value).to.equal('test');

        const button = wrapper.find('#btn');
        button.simulate('click');

        td.verify(handleClick(childRef))
    })
})