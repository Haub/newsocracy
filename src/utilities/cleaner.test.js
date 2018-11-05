import { cleanLeftData, cleanCenterData, cleanRightData } from './cleaner.js';

describe('Cleaner', () => {
  it('should return a clean news article from the left sources', () => {
    const mockDate = '2018-11-1';
    const mockArticle = {
      source: 'MSNBC',
      title: 'Election',
      publishedAt: '2018-11-05T15:47:25Z',
      author: 'Joe',
      url: 'www.cnn.com',
      category: 'left',
    };

    const expected = {
      source: 'MSNBC',
      title: 'Election',
      date: '2018-11-05',
      author: 'Joe',
      url: 'www.cnn.com',
      category: 'left',
    };
    const result = cleanLeftData(mockArticle);
    expect(result).toEqual(expected);
  });

  it('should return a clean news article from the center sources', () => {
    const article = {
      source: 'CNN',
      title: 'Election Coverage',
      publishedAt: '2018-11-05T15:47:25Z',
      author: 'Joe',
      url: 'www.cnn.com',
      category: 'center'
    };
    const expected = {
      source: 'CNN',
      title: 'Election Coverage',
      author: 'Joe',
      date: '2018-11-05',
      url: 'www.cnn.com',
      category: 'center'
    };
    const result = cleanCenterData(article);
    expect(result).toEqual(expected);
  });

  it('should return a clean news article from the right sources', () => {
    const article = {
      source: 'Fox',
      title: 'News Coverage',
      author: 'Joe',
      publishedAt: '2018-11-05T15:47:25Z',
      url: 'www.fox.com',
      category: 'right'
    };
    const expected = {
      source: 'Fox',
      title: 'News Coverage',
      author: 'Joe',
      date: '2018-11-05',
      url: 'www.fox.com',
      category: 'right'
    };
    const result = cleanRightData(article);
    expect(result).toEqual(expected);
    
  });
})