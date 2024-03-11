import axios from "axios";

const newsApi = axios.create({
  baseURL:"https://nc-news-2y2g.onrender.com/api"

    })

 export  const  getArticles=()=>{

    return newsApi.get("/articles").then((response) => {
            return response.data.articles
      });

 }