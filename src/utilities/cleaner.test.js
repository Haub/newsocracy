import { cleanLeftData, cleanCenterData, cleanRightData } from './cleaner.js';

describe('Cleaner', () => {
  it('should return a clean news article from the left sources', () => {
    const article = {
      source: 'MSNBC',
      title: 'Election',
      author: 'Joe',
      url: 'www.cnn.com',
      category: 'left'
    };
    const expected = {
      source: 'MSNBC',
      title: 'Election',
      author: 'Joe',
      url: 'www.cnn.com',
      category: 'left'
    };
    const result = cleanLeftData(article);
    expect(result).toEqual(expected);
  });

  it('should return a clean news article from the center sources', () => {
    const article = {
      source: 'CNN',
      title: 'Election Coverage',
      author: 'Joe',
      url: 'www.cnn.com',
      category: 'center'
    };
    const expected = {
      source: 'CNN',
      title: 'Election Coverage',
      author: 'Joe',
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
      url: 'www.fox.com',
      category: 'right'
    };
    const expected = {
      source: 'Fox',
      title: 'News Coverage',
      author: 'Joe',
      url: 'www.fox.com',
      category: 'right'
    };
    const result = cleanRightData(article);
    expect(result).toEqual(expected);
    
  });
})