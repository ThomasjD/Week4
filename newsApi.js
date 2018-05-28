/*
author
title
description
url (hyperlink to go to the news)
urlToImage (image associated with the news)
publishedAt

{"status": "ok",
 "articles":[{"source": {"id": "", "name": ""},
            "author": "",
            "title": "",
            "description"
            "url": "",
            "urlToImage": ""
            "publishedAt"]
}
1st nest = dict{status & article}
  2nd nest: article is an array of dictionaries
    3rd nest: articles[0] = {source, author, title, url, urlToImage}
             articles[1] = {source, author, title, url, urlToImage}
             articles[2] = {source, author, title, url, urlToImage}
             articles[3] = {source, author, title, url, urlToImage}
             articles[4] = {source, author, title, url, urlToImage}
*/



  

let body = document.querySelector("body")

let btnNews = document.querySelector("#btnNews")


btnAdd.addEventListener('click', function() {
  function(statusNews) {
    if(statusNews.status === "ok"){
      news= statusNews["articles"]
      getNews(news)
    }   
  }
}



function getNews(newsInfo) {
  body.innerHTML = ''
  newsInfo.forEach(function(article){
    let eachArticle = ` 
      <h3>${article.author}</3>
      <h3>${article.title}</h3>
      <h3>${article.description}</h3>
      <h3>${article.url}</h3>
      <h3>${article.urlToImage}</h3>
      <h3>${article.publishedAt}</h3>`
    
    body.innerHTML += eachArticle
  })
}
