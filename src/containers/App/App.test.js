import React from 'react';
import { shallow } from 'enzyme';
import { App } from './index.js';
import { mapStateToProps, mapDispatchToProps } from './index.js';
import { addCategoryNews } from '../../actions';
import * as API from '../../utilities/helper';


describe('APP', () => { 
  it('should match the snapshot', () => {
   const wrapper = shallow(<App />);
   expect(wrapper).toMatchSnapshot();
  });

  it('should invoke getNews when a button is pressed', () => {
    const wrapper = shallow(<App />);
    const spy = jest.spyOn(API, 'getNews');
    const mockArticle = {
      source: 'MSNBC',
      title: 'Election',
      publishedAt: '2018-11-05T15:47:25Z',
      author: 'Joe',
      url: 'www.cnn.com',
      category: 'left',
    };
    wrapper.instance().handleClick('immigration');
    expect(spy).toHaveBeenCalled();
  });
})

describe('mapStateToProps', () => {
  it('should have access to the articles array', () => {
    const mockStore = {
      articles: []
    };
    const expected = {...mockStore};
    const result = mapStateToProps(mockStore);
    expect(result).toEqual(expected);
  });
});

describe('mapDispatchToProps', () => {
  it('should add articles to the store with addCategoryNews', () => {
    const mockDispatch = jest.fn();
    const actiontoDispatch = addCategoryNews([]);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.addCategoryNews([]);
    expect(mockDispatch).toHaveBeenCalledWith(actiontoDispatch);
  });
})