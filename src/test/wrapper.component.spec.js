import React from 'react';
import Adapter from 'enzyme-adapter-react-15'
import Enzyme from 'enzyme';
import { mount } from 'enzyme';
import Wrapper from '../wrapper/wrapper.component';
import Input from '../input/input.container';

Enzyme.configure({ adapter: new Adapter() })

describe('wrapper', () => {
    it('should', () => {
       const wrapper = mount(<Wrapper />);

    })
})