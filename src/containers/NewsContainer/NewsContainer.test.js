import React from 'react';
import { shallow } from 'enzyme';
import NewsContainer from './index.js';

it('should match the snapshot', () => {
 const wrapper = shallow(<NewsContainer />);
 expect(wrapper).toMatchSnapshot();
});