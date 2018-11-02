export const cleanNewsData = (article) => {

  const cleanArticle = {
    source: article.source,
    title: article.title,
    date: article.publishedAt,
    author: article.author,
    url: article.url,
    image: article.urlToImage
  }
  return cleanArticle;
}