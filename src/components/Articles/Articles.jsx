import { useState,useEffect } from "react"
import {getArticles} from '../../utils/api'
import './Articles.css'




const Articles=()=>{
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
          <h3>{article.title}</h3>
          <p>{article.author}</p>
          <span>Votes: {article.votes}</span>
        </div>
      ))}
    </div>
  );


}


export default Articles