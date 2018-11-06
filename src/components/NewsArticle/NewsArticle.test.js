import React from 'react';
import { shallow } from 'enzyme';
import { NewsArticle } from './index.js';

it('should match the snapshot', () => {
  const mockArticle = { title: 'Name', source: 'npr.org'};
  const wrapper = shallow (<NewsArticle article={mockArticle}/>);
  expect(wrapper).toMatchSnapshot();
});