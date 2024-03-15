import React, { useState, useEffect } from "react";
import { getArticles } from '../../utils/api';
import './Articles.css';
import { Link } from 'react-router-dom';
import { sortArticles } from "../../utils/sort_by.js";

const Articles = ({sortBy,setSortBy,sortOrder,setSortOrder}) => {
  const [allArticles, setAllArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
      const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    getArticles().then((articles) => {
      setAllArticles(articles);
      
    })
  }, [])

  const handleSort = (criteria) => {
    if (sortBy === criteria) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(criteria);
      setSortOrder('desc');
    }
  }; 
  const sortedArticles = sortArticles(allArticles, sortBy, sortOrder);
 
  
  if (isLoading){ 
  return( 
    <div className="loading-screen">
  <div className="spinner"></div>
  <p>Loading...</p>
</div>)}


  return (
    <div id="articles-container">
      <div className="sort-buttons">
        <button onClick={() => handleSort('created_at')}>Sort by Date</button>
        <button onClick={() => handleSort('comments')}>Sort by Comments</button>
        <button onClick={() => handleSort('votes')}>Sort by Votes</button>
        <button onClick={() => handleSort(sortBy)}>Toggle Order</button>
      </div>
      {sortedArticles.map((article, index) => (
        <div key={index} className="article-card">
          <img src={article.article_img_url} alt={article.title} /> 
          <Link to={`/articles/${article.article_id}`}>{article.title}</Link>     
          <p>{article.author}</p>
          <span>Votes: {article.votes}</span> 
          <span>Comments: {article.comment_count}</span> 
          <p>{article.created_at}</p>
        </div>
      ))}
    </div>
  );
};

export default Articles;