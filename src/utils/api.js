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
 export const addComment = (article_id,newComment,user) => {
  return newsApi
  .post(`/articles/${article_id}/comments`, {body:newComment,username:user })
    .then((response) => {
      return response
    
    });
};

export const deleteComment=(comment_id)=>{
 return newsApi.delete(`/comments/${comment_id}`)

}

export const getTopics=()=>{
  return newsApi.get('/topics')
  .then((response)=>{
    return response.data.topics
  })
}
export const getArticlesByTopic=(topic)=>{
  return newsApi.get(`/articles?topic=${topic}`)
  .then((response)=>{
    return response.data.articles
  })

 

}