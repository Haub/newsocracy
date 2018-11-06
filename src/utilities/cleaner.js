export const cleanLeftData = (article, category, index) => {
  const date = article.publishedAt.slice(0,10);

  return {
    source: article.source,
    title: article.title,
    date: date,
    author: article.author,
    url: article.url,
    image: article.urlToImage,
    content: article.content,
    category: category,
    id: 'left' + index
  }
};

export const cleanCenterData = (article, category, index) => {
  const date = article.publishedAt.slice(0,10);

  return {
    source: article.source,
    title: article.title,
    date: date,
    author: article.author,
    url: article.url,
    image: article.urlToImage,
    content: article.content,
    category: category,
    id: 'center' + index
  }
};

export const cleanRightData = (article, category, index) => {
  const date = article.publishedAt.slice(0,10);
  
  return {
    source: article.source,
    title: article.title,
    date: date,
    author: article.author,
    url: article.url,
    image: article.urlToImage,
    content: article.content,
    category: category,
    id: 'right' + index
  }
};