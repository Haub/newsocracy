import { key } from './apiKey';

export const getNews = async(category) => {
  const leftResponse = await getNewsFromLeft(category);
  const centerResponse = await getNewsFromCenter(category);
  const rightResponse = await getNewsFromRight(category);
  const allNews = {
    left: {...leftResponse},
    center: {...centerResponse},
    right: {...rightResponse}
  }
  return allNews
};



export const getNewsFromLeft = async(category) => {
  const response = await fetch(`https://newsapi.org/v2/everything?q=${category}&domains=huffingtonpost.com,msnbc.com&sortBy=publishedAt&apiKey=${key}`);
  const data = await response.json();
  return data 
};

export const getNewsFromCenter = async(category) => {
  const response = await fetch(`https://newsapi.org/v2/everything?q=${category}&domains=npr.org,bbc.com,cnn.com&sortBy=publishedAt&apiKey=${key}`);
  const data = await response.json();
  return data 
};

export const getNewsFromRight = async(category) => {
  const response = await fetch(`https://newsapi.org/v2/everything?q=${category}&domains=breitbart.com,foxnews.com&sortBy=publishedAt&apiKey=${key}`);
  const data = await response.json();
  console.log(data);
  return data
};


