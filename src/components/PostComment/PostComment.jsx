import { useParams } from "react-router-dom";
import { addComment } from "../../utils/api";
import{useState} from 'react'

const PostComment=({setComments,comments})=>{
     const {article_id} = useParams()

    const [commentBody, setCommentBody] = useState('');
    const [username, setUsername] = useState('');
  
    const handleSubmit = (event) => {
      
        event.preventDefault();
      if (!username) {
        alert('Please enter your username.');
      }
       setComments((currComments)=>{
        const id= currComments[currComments.length-1].comment_id +1
        console.log(id)
        const commentToAdd={comment_id:id,body:commentBody,user:username,votes:0,created_at: 'Just Now'}
        return [...currComments,commentToAdd]  
      
       })
       setCommentBody('')
       setUsername('')
      
addComment(article_id,commentBody,username).then(()=>{

}).catch((error) => {
      console.error('Error:', error);
    })
  
  }


    return (
      <form onSubmit={handleSubmit}>
        <label >
         <input type="text"
          value={username}
          onChange={(event) =>{
      
          setUsername(event.target.value)
          
           }} ></input></label>
           <label>
                <input
          value={commentBody}
          type='text'
          onChange={(event) => setCommentBody(event.target.value)}

        /></label>
   
        <button type="submit">Post Comment</button>
      </form>
    );
  
  
  };





export default PostComment