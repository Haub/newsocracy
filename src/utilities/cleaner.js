export const cleanLeftData = (article) => {
  return {
    source: article.source,
    title: article.title,
    date: article.publishedAt,
    author: article.author,
    url: article.url,
    image: article.urlToImage,
    category: 'left'
  }
};

export const cleanCenterData = (article) => {
  return {
    source: article.source,
    title: article.title,
    date: article.publishedAt,
    author: article.author,
    url: article.url,
    image: article.urlToImage,
    category: 'center'
  }
};

export const cleanRightData = (article) => {
  return {
    source: article.source,
    title: article.title,
    date: article.publishedAt,
    author: article.author,
    url: article.url,
    image: article.urlToImage,
    category: 'right'
  }
};