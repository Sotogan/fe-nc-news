
import { useParams } from "react-router-dom"
import {getComments,deleteComment} from '../../utils/api.js'
import {useState,useEffect} from 'react' 
import './Comments.css'

const Comments=({comments,setComments})=>{

const [isLoading,setIsLoading]=useState(true)
  const   {article_id}=useParams()
  const handleDelete = (comment_id) => {
    deleteComment(comment_id);
      setComments(comments.filter(comment => comment.comment_id !== comment_id));
  };
    
    useEffect(() => {
        setIsLoading(true)
        getComments(article_id).then((comments) => {
          setComments(comments);
          
          setIsLoading(false)
        });
      }, []);
      if(isLoading) return <p>LOADING........</p>
      
      return (
        <div id="xarticles-container">
          {comments.map((comment) => (
            <div key={comment.comment_id} className="xarticle-card"> 
               <p>{comment.body}</p>
              <span>Votes: {comment.votes}</span> 
              <p>{comment.created_at}</p>
              <button onClick={() => handleDelete(comment.comment_id)}>Delete Comment</button>
            </div>
          ))}
        </div>
        )








}



export default Comments