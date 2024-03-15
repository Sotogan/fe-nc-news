import {useState,useEffect} from 'react'
import{getTopics,getArticlesByTopic} from '../../utils/api.js'
import {Link,useSearchParams} from "react-router-dom"
import './Topics.css'
import { sortArticles } from '../../utils/sort_by.js'
import ErrorPage from '../ErrorPage/ErrorPage.jsx'


const Topics=({sortBy, setSortBy , sortOrder ,setSortOrder,error,setError})=>{
    const [topics, setTopics] = useState([]);
    const [ArticlesByTopic,setArticlesByTopic]=useState([])
    const [searchParams,setSearchParams]=useSearchParams()
   
    useEffect(() => {
    
      setError(null)
    }, []);
  
   
    useEffect(() => {
    
      getTopics().then((topics) => {
        
        setTopics(topics)
                
      })
    }, []);

    useEffect(() => {
      const topic = searchParams.get('topic');
      if (topic) {
        getArticlesByTopic(topic).then((articles) => {
          setArticlesByTopic(articles);
        }).catch((err) => {
          setError(err);
            })
             }
    }, [searchParams]);


    const handleClick = (topic) => {
      
        getArticlesByTopic(topic).then((articles) => {
          setArticlesByTopic(articles);
           setSearchParams({ topic: topic });
           
        })
      };
      const handleSort = (criteria) => {
        if (sortBy === criteria) {
          setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
          setSortBy(criteria);
          setSortOrder('desc');
        }
      };

  if (error) {
    
    return <ErrorPage/>
    }
       
 
   


      const sortedArticles = sortArticles(ArticlesByTopic, sortBy, sortOrder);
      
  
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
        <div className="sort-buttons">
        <button onClick={() => handleSort('created_at')}>Sort by Date</button>
        <button onClick={() => handleSort('comments')}>Sort by Comments</button>
        <button onClick={() => handleSort('votes')}>Sort by Votes</button>
        <button onClick={() => handleSort(sortBy)}>Toggle Order</button>
      </div>
        {sortedArticles.map((article) => {
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