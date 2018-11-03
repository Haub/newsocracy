import { key } from './apiKey';
import { getNewsFromLeft } from './helper.js';
import { cleaner } from './cleaner.js';

describe('HELPER', () => {
  it('should call getNewsFromLeft with the correct params', async() => {
    const expected = `https://newsapi.org/v2/everything?q=immigration&domains=huffingtonpost.com,msnbc.com&sortBy=publishedAt&apiKey=${key}`;
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: true,
        json: () => Promise.resolve(expected)
    }));
    await getNewsFromLeft();
    expect(window.fetch).toHaveBeenCalledWith(expected);
  });

  it('should return left news articles', async () => {
    const mockArticle = {title: 'News Story', source: 'CNN.com'};
    const expected = {title: 'News Story', source: 'CNN.com'};
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve( data )
    }));
    await getNewsFromLeft();
    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });

  it('should return false if no data comes back', () => {
  });

})