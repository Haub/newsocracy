import { addCategoryNews } from '../actions';
import { articleReducer } from './articleReducer';

describe('articleReducer', () => {
  
  it('should return the initial state', () => {
    const expected = [];
    const result = articleReducer(undefined, []);
    expect(result).toEqual(expected);
  });

  it('should return the state with news articles', () => {
    const initialState = [];
    const articles = [{title: 'Todays News'}, {title: 'Tomorrows News'}];
    const expected = [...articles]
    const result = articleReducer(initialState, addCategoryNews(articles));
    expect(result).toEqual(expected);
  });

  it('should default to empty array if updated with false', () => {
    const initialState = [{title: 'Todays News'}, {title: 'Tomorrows News'}];
    const expected = [];
    const result = articleReducer(initialState, addCategoryNews(undefined));
    expect(result).toEqual(expected);
  })


})