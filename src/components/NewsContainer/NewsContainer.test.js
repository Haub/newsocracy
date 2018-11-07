import React from 'react';
import { shallow } from 'enzyme';
import { NewsContainer } from './index.js';
jest.mock('uuid', () => jest.fn(() => 1));


it('should match the snapshot with props', () => {
  const mockArticles = [{ title: 'Name', source: 'npr.org'}];
  const wrapper = shallow(<NewsContainer articles={mockArticles} />);
  expect(wrapper).toMatchSnapshot();
});