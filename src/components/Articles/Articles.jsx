import { useState,useEffect } from "react"
import {getArticles} from '../../utils/api'
import './Articles.css'
import {Link} from 'react-router-dom'



const Articles=({article,setArticle})=>{
  const [allArticles,setAllArticles]=useState([])
  const [isLoading,setIsLoading]=useState(true)
 
 

  useEffect(() => {
    setIsLoading(true)
    getArticles().then((articles) => {
      setAllArticles(articles);
      setIsLoading(false)
    });
  }, []);



  

  if (isLoading) return <p>LOADING .....</p>


return (
    <div id="articles-container">
      {allArticles.map((article, index) => (
        <div key={index} className="article-card">
          <img src={article.article_img_url} alt={article.title} /> 
          <Link to={`/articles/${article.article_id}`  }>{article.title}</Link>
               
          <p>{article.author}</p>
          <span>Votes: {article.votes}</span> 
          <span>Comments: {article.comment_count}</span> 
          <p>{article.created_at}</p>
        </div>
      ))}
    </div>
    )
     
      }





export default Articles