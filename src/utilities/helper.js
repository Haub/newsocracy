import { key } from './apiKey';
import { cleanLeftData, cleanCenterData, cleanRightData } from './cleaner.js'

export const getNews = async(category) => {
  try {
    const leftResponse = await getLeftNews(category);
    const centerResponse = await getCenterNews(category);
    const rightResponse = await getRightNews(category);
    const leftArticles = leftResponse.articles.map(article => cleanLeftData(article));
    const rightArticles = rightResponse.articles.map(article => cleanCenterData(article));
    const centerArticles = centerResponse.articles.map(article => cleanRightData(article));
    const allNews = [...leftArticles, ...centerArticles, ...rightArticles];
    return allNews
  } catch(error) {
    throw new Error(error.message)
  }
};

export const getLeftNews = async(category) => {
  try {
    const response = await fetch(`https://newsapi.org/v2/everything?q=${category}&domains=huffingtonpost.com,msnbc.com&sortBy=publishedAt&apiKey=${key}`);
    const leftData = await response.json();
    return leftData
  } catch(error) {
    throw new Error(error.message)
  }
};

export const getCenterNews = async(category) => {
  try {
    const response = await fetch(`https://newsapi.org/v2/everything?q=${category}&domains=npr.org,bbc.com,cnn.com&sortBy=publishedAt&apiKey=${key}`);
    const centerData = await response.json();
    return centerData
  } catch(error) {
    throw new Error(error.message)
  }
};

export const getRightNews = async(category) => {
  try {
    const response = await fetch(`https://newsapi.org/v2/everything?q=${category}&domains=breitbart.com,foxnews.com&sortBy=publishedAt&apiKey=${key}`);
    const rightData = await response.json();
    return rightData
  } catch(error) {
    throw new Error(error.message)
  }
};


