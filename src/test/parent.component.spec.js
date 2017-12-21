import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import chai, { expect, should } from 'chai';
import { shallow, mount } from 'enzyme';
import td from 'testdouble';
import sinon, { assert } from 'sinon';
import SinonChai from 'sinon-chai';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
chai.should();
chai.use(SinonChai);

import Parent, { Child, allReducers } from '../index.js';

const store = createStore(combineReducers(allReducers));

Enzyme.configure({ adapter: new Adapter() })

describe('parent', () => {
    it('should render child', () => {
        const wrapper = mount(<Provider store={store}><Parent /></Provider>);

        const child = wrapper.find('#child');

        expect(child).to.be.not.null;

    })

    it('should invoke handleClick with child value', () => {
        const handleClick = sinon.spy();
        const wrapper = mount(<Provider store={store}><Parent handleClick={handleClick}/></Provider>);

        wrapper.find(Child).instance().selector.props.handleChange('test')

        expect(wrapper.find(Child).instance().selector.props.value).to.equal('test');

        const button = wrapper.find('#btn');
        const spy = sinon.spy(wrapper.find(Parent).instance().selector.props.handleClick);
        button.simulate('click');

        expect(handleClick).to.have.been.calledWith("test");
    })
})