import React from 'react';
import { shallow } from 'enzyme';
import App from './index.js';

it('should match the snapshot', () => {
 const wrapper = shallow(<App />);
 expect(wrapper).toMatchSnapshot();
});
