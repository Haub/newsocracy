import React from 'react';
import { shallow } from 'enzyme';
import { NewsContainer } from './index.js';

it('should match the snapshot', () => {
 const mockArticles = [{ title: 'Name', source: 'npr.org'}];
 const wrapper = shallow(<NewsContainer articles={mockArticles} />);
 expect(wrapper).toMatchSnapshot();
});