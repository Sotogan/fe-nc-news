import { useParams } from "react-router-dom";
import { addComment } from "../../utils/api.js";
import{useState} from 'react'

const PostComment=({setComments,comments})=>{
     const {article_id} = useParams()

    const [commentBody, setCommentBody] = useState('');
    const [username, setUsername] = useState('');
  
    const handleSubmit = (event) => {
      
        event.preventDefault();
        if(!commentBody){
          alert('Please enter a comment')
        }else{
      if (username!== 'tickle122' && username !== 'grumpy19' && username !=='happyamy2016 '&& username !=='cooljmessy' && username !=='jessjelly') {
        alert('Please enter a valid username.');
      }
      else{
      
       setComments((currComments)=>{
        const id= currComments[currComments.length-1].comment_id +1

        const commentToAdd={comment_id:id,body:commentBody,user:username,votes:0,created_at: 'Just Now'}
        return [commentToAdd,...currComments]  
      
       })}}
       setCommentBody('')
       setUsername('')
      
addComment(article_id,commentBody,username).then(()=>{

}).catch((error) => {
      console.error('Error:', error);
    })
  
  }


    return (
      <form onSubmit={handleSubmit}>
        <label > enter User:
         <input type="text"
          value={username}
          onChange={(event) =>{
      
          setUsername(event.target.value)
          
           }} ></input></label>
           <label> Comment Here:
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