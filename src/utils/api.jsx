import axios from "axios";

const newsApi = axios.create({
  baseURL:"https://nc-news-2y2g.onrender.com/api"

    })

 export  const  getArticles=(article_id= undefined)=>{
    
    if (article_id === undefined){
       return newsApi.get("/articles").then((response) => {
            return response.data.articles
      });
    }
    else{
        return newsApi
         .get(`/articles/${article_id}`).then((response)=>{
           
            return response.data.article
         })


    }

 }