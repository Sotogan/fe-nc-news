
import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"
import {getArticles,getComments} from '../../utils/api'
import {Routes,Route} from 'react-router-dom'
import Comments from '../Comments/Comments.jsx'
import {Link} from 'react-router-dom'
import VoteButton from "../VoteButton./VoteButton.jsx"

 
const SingleArticle=()=>{
 const {article_id }=  useParams()
 const [comments,setComments]=useState([])
  const [initVotes,setInitVotes]=useState(0)
 const [isLoading,setIsLoading]=useState(true)   

 const [article,setArticle]=useState([])
  
 const handleClick=(article_id)=>{
    getComments(article_id)
    .then((comments)=>{
        setComments(comments)
        
    })

 }
 useEffect(() => {
    setIsLoading(true)
    getArticles(article_id).then((article) => {
      setInitVotes(article.votes)
      setArticle(article);
      setIsLoading(false)
    });
  }, []);
  if(isLoading) return <p>LOADING.....</p>

  return(<>
     <div id="articlexx-container">
          
          <div key={article.article_id} id="articxxles-container" className="articlxxe-card">
            <img src={article.article_img_url} alt={article.title} />
            <h3>{article.title}</h3>
            <p>{article.body}</p>
            <VoteButton initVotes={initVotes} />
            <button onClick={()=>handleClick(article.article_id,article.votes)}>show comments</button>
       
          </div>
          
         </div>
           <div id="xarticles-container">
           {comments.map((comment) => { return(
             <div key={comment.comment_id} className="xarticle-card"> 
                <p>{comment.body}</p>
               <span>Votes: {comment.votes}</span> 
               <p>{comment.created_at}</p>
             </div>
           ) 
           })}
         </div>

         </>
            
         
         ) 





}







export default SingleArticle