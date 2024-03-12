
import { useParams } from "react-router-dom"
import {getComments} from '../../utils/api'
import {useState,useEffect} from 'react' 
import './Comments.css'

const Comments=()=>{
//     const [comments,setComments]=useState([])
//     const [isLoading,setIsLoading]=useState(true)
//   const   {article_id}=useParams()
    
//     useEffect(() => {
//         setIsLoading(true)
//         getComments(article_id).then((comments) => {
//           setComments(comments);
          
//           setIsLoading(false)
//         });
//       }, []);
//       if(isLoading) return <p>LOADING........</p>
      
//       return (
//         <div id="xarticles-container">
//           {comments.map((comment) => (
//             <div key={comment.comment_id} className="xarticle-card"> 
//                <p>{comment.body}</p>
//               <span>Votes: {comment.votes}</span> 
//               <p>{comment.created_at}</p>
//             </div>
//           ))}
//         </div>
//         )








}



export default Comments