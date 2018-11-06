export const cleanLeftData = (article) => {
  const date = article.publishedAt.slice(0,10);

  return {
    source: article.source,
    title: article.title,
    date: date,
    author: article.author,
    url: article.url,
    image: article.urlToImage,
    category: 'left'
  }
};

export const cleanCenterData = (article) => {
  const date = article.publishedAt.slice(0,10);

  return {
    source: article.source,
    title: article.title,
    date: date,
    author: article.author,
    url: article.url,
    image: article.urlToImage,
    category: 'center'
  }
};

export const cleanRightData = (article) => {
  const date = article.publishedAt.slice(0,10);
  
  return {
    source: article.source,
    title: article.title,
    date: date,
    author: article.author,
    url: article.url,
    image: article.urlToImage,
    category: 'right'
  }
};