import { addCategoryNews } from './index.js';

describe('actions', () => {
  it('should have a type of ADD_CATEGORY_NEWS', () => {
    const articles = [];
    const expected = {
      type: 'ADD_CATEGORY_NEWS',
      articles
    };
    const result = addCategoryNews(articles);
    expect(result).toEqual(expected);
  })
})