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
 export const getComments=(article_id)=>{
  return newsApi
  .get(`/articles/${article_id}/comments`)
  .then((response)=>{
   return response.data.comments

  })

 }

 export const patchArticle=(article_id)=>{

   return newsApi.patch(`/articles/${article_id}`,{vote_inc:1})
   .then((response)=>{
    return response.data.update[0].votes
    

   })


 }