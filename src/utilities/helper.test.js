import { key } from './apiKey';
import { getLeftNews, getCenterNews, getRightNews } from './helper.js';
import { cleaner } from './cleaner.js';

describe('HELPER', () => {
  it('should call getLeftNews with the correct params', async() => {
    const expected = `https://newsapi.org/v2/everything?q=undefined&domains=huffingtonpost.com,msnbc.com&sortBy=publishedAt&apiKey=${key}`;
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: true,
        json: () => Promise.resolve(expected)
    }));
    await getLeftNews();
    expect(window.fetch).toHaveBeenCalledWith(expected);
  });

  it('should return left news articles if the fetch is ok', async () => {
    const mockArticle = {title: 'News Story', source: 'CNN.com'};
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve( mockArticle )
    }));
    const result = await getLeftNews();

    expect(result).toEqual(mockArticle);
  });

  it('should throw an error if the getLeftNews fails', async () => {
    const url = `https://newsapi.org/v2/everything?q=undefined&domains=huffingtonpost.com,msnbc.com&sortBy=publishedAt&apiKey=${key}`;
    const expected = new Error('failed');
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(new Error('failed'));
    });
    await expect(getLeftNews(url)).rejects.toEqual(expected);
  });

  it('should call getCenterNews with the correct params', async() => {
    const expected = `https://newsapi.org/v2/everything?q=undefined&domains=npr.org,bbc.com,cnn.com&sortBy=publishedAt&apiKey=${key}`;
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: true,
        json: () => Promise.resolve(expected)
    }));
    await getCenterNews();
    expect(window.fetch).toHaveBeenCalledWith(expected);
  });

  it('should return center news articles if the fetch is ok', async () => {
    const mockArticle = {title: 'News Story', source: 'CNN.com'};
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve( mockArticle )
    }));
    const result = await getCenterNews();
    expect(result).toEqual(mockArticle);
  });

  it('should throw an error if the getCenterNews fails', async () => {
    const url = `https://newsapi.org/v2/everything?q=undefined&domains=domains=npr.org,bbc.com,cnn.com&sortBy=publishedAt&apiKey=${key}`;
    const expected = new Error('failed');
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(new Error('failed'));
    });
    await expect(getCenterNews(url)).rejects.toEqual(expected);
  });

  it('should call getRightNews with the correct params', async() => {
    const expected = `https://newsapi.org/v2/everything?q=undefined&domains=breitbart.com,foxnews.com&sortBy=publishedAt&apiKey=${key}`;
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: true,
        json: () => Promise.resolve(expected)
    }));
    await getRightNews();
    expect(window.fetch).toHaveBeenCalledWith(expected);
  });

  it('should return right news articles', async () => {
    const mockArticle = {title: 'News Story', source: 'CNN.com'};
    const expected = {title: 'News Story', source: 'CNN.com'};
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve( mockArticle )
    }));
    const result = await getRightNews();
    expect(result).toEqual(mockArticle);
  });

  it('should throw an error if the getRightNews fails', async () => {
    const url = `https://newsapi.org/v2/everything?q=undefined&domains=breitbart.com,foxnews.com&sortBy=publishedAt&apiKey=${key}`;
    const expected = new Error('failed');
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(new Error('failed'));
    });
    await expect(getRightNews(url)).rejects.toEqual(expected);
  });

})