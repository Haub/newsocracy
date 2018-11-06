import { cleanLeftData, cleanCenterData, cleanRightData } from './cleaner.js';

describe('Cleaner', () => {
  it('should return a clean news article from the left sources', () => {
  
    const mockArticle = {
      source: 'MSNBC',
      title: 'Election',
      publishedAt: '2018-11-05T15:47:25Z',
      author: 'Joe',
      url: 'www.msnbc.com',
      urlToImage: 'www.msnbc.com/image',
      content: 'This is the headline story...',
    };

    const expected = {
      source: 'MSNBC',
      title: 'Election',
      date: '2018-11-05',
      author: 'Joe',
      url: 'www.msnbc.com',
      image: 'www.msnbc.com/image',
      category: 'left',
      content: 'This is the headline story...',
      date: '2018-11-05',
      id: 'left9'
    };
    const result = cleanLeftData(mockArticle, 'left', '9');
    expect(result).toEqual(expected);
  });

  it('should return a clean news article from the center sources', () => {
    const mockArticle = {
      source: 'CNN',
      title: 'Election coverage',
      publishedAt: '2018-11-05T15:47:25Z',
      author: 'Joe',
      url: 'www.cnn.com',
      urlToImage: 'www.cnn.com/image',
      content: 'This is the headline story...',
    };

    const expected = {
      source: 'CNN',
      title: 'Election coverage',
      date: '2018-11-05',
      author: 'Joe',
      url: 'www.cnn.com',
      image: 'www.cnn.com/image',
      category: 'center',
      content: 'This is the headline story...',
      date: '2018-11-05',
      id: 'center9'
    };

    const result = cleanCenterData(mockArticle, 'center', '9');
    expect(result).toEqual(expected);
  });

  it('should return a clean news article from the right sources', () => {

    const mockArticle = {
      source: 'Fox',
      title: 'News coverage',
      publishedAt: '2018-11-05T15:47:25Z',
      author: 'Joe',
      url: 'www.fox.com',
      urlToImage: 'www.fox.com/image',
      content: 'This is the headline story...',
    };

    const expected = {
      source: 'Fox',
      title: 'News coverage',
      date: '2018-11-05',
      author: 'Joe',
      url: 'www.fox.com',
      image: 'www.fox.com/image',
      category: 'right',
      content: 'This is the headline story...',
      date: '2018-11-05',
      id: 'right9'
    };

    const result = cleanRightData(mockArticle, 'right', '9');
    expect(result).toEqual(expected);
    
  });
})