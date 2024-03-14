import {useState,useEffect} from 'react'
import{getTopics,getArticlesByTopic} from '../../utils/api.js'
import {Link} from "react-router-dom"
import './Topics.css'
const Topics=()=>{
    const [topics, setTopics] = useState([]);
    const [ArticlesByTopic,setArticlesByTopic]=useState([])

  
    useEffect(() => {
      getTopics().then((topics) => {
        setTopics(topics);
        
      });
    }, []);
    const handleClick = (topic) => {
        
        getArticlesByTopic(topic).then((articles) => {
          setArticlesByTopic(articles);
        });
      };
  
    return (
      <>
        <div id="articles-container">
          {topics.map((topic,index) => (
            <button id='button'
              onClick={() => handleClick(topic.slug)}
              key={index}
            >
              {topic.slug}
            </button>
          ))}
        </div>
  
        <div id="article-container">
        {ArticlesByTopic.map((article) => {
          return (
            <div key={article.article_id} id="article-container" className="article-card">
          <img src={article.article_img_url} alt={article.title} /> 
          <Link to={`/articles/${article.article_id}`  }>{article.title}</Link>     
          <p>{article.author}</p>
          <span>Votes: {article.votes}</span> 
          <span>Comments: {article.comment_count}</span> 
          <p>{article.created_at}</p>
            </div>  
          );
        })}
        </div>
      </>
    );




}

export default Topics