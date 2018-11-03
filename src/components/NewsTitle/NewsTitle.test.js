import React from 'react';
import { shallow } from 'enzyme';
import NewsTitle from './index.js';

it('should match the snapshot', () => {
 const wrapper = shallow (<NewsTitle />);
 expect(wrapper).toMatchSnapshot();
});