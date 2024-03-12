
import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"
import {getArticles} from '../../utils/api'

const SingleArticle=()=>{
 const {article_id }=  useParams()
  
 const [isLoading,setIsLoading]=useState(true)   
 const [article,setArticle]=useState([])
  useEffect(() => {
    setIsLoading(true)
    getArticles(article_id).then((article) => {
      setArticle(article);
      setIsLoading(false)
    });
  }, []);
  if(isLoading)<p>LOADING.....</p>

  return(
     <div id="item-container">
      <p>Hello</p>
      
          <div key={article.article_id} id="items-container" className="item-card">
            <img src={article.article_img_url} alt={article.title} />
            <h3>{article.title}</h3>
            <p>{article.body}</p>
            <span> {article.votes}</span>
          </div>
         </div>) 





}







export default SingleArticle