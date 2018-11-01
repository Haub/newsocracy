import { key } from './apiKey';

export const getNews = async() => {
  const response = await fetch(`https://newsapi.org/v2/everything?q=metoo&domains= breitbart.com,  theamericanconservative.com&from=2018-10-22&to=2018-10-28&sortBy=popularity&apiKey=${key}`);
  const data = await response.json();
  console.log(data);

}