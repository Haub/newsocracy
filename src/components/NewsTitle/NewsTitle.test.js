import React from 'react';
import { shallow } from 'enzyme';
import { NewsTitle } from './index.js';

it('should match the snapshot', () => {
 const mockArticle = { title: 'Name', source: 'npr.org'};
 const wrapper = shallow (<NewsTitle article={mockArticle}/>);
 expect(wrapper).toMatchSnapshot();
});