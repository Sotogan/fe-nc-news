import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticles, getComments } from "../../utils/api.js";
import Comments from "../Comments/Comments.jsx";
import VoteButton from "../VoteButton./VoteButton.jsx";
import PostComment from "../PostComment/PostComment.jsx";
import ErrorPage from "../ErrorPage/ErrorPage.jsx";

const SingleArticle = ({error,setError}) => {
  const { article_id } = useParams();

  const [comments, setComments] = useState([]);
  const [initVotes, setInitVotes] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const [article, setArticle] = useState([]);

  const handleClick = (article_id) => {
    getComments(article_id).then((comments) => {
      setComments(comments);
    });
  };

  const handleDelete = (comment_id) => {
    deleteComment(comment_id).then(()=>{

      setComments(comments.filter(comment => comment.comment_id !== comment_id));
    })
    
  
  };

  useEffect(() => {
    setIsLoading(true);
    getArticles(article_id).then((article) => {
      setInitVotes(article.votes);
      setArticle(article);
      setIsLoading(false);
    }).catch((err) => {
      setError(err);
        })
  }, []);

  if (error) {
    return <ErrorPage message={error} />;
  }

  if (isLoading) return <p>LOADING.....</p>;

  return (
    <>
      <div id="articlexx-container">
        <div key={article.article_id} id="articxxles-container" className="articlxxe-card">
          <img src={article.article_img_url} alt={article.title} />
          <h3>{article.title}</h3>
          <p>{article.body}</p>
          <VoteButton initVotes={initVotes} />
          <PostComment comments={comments} setComments={setComments} />
          <Comments comments={comments} setComments={setComments}/>
         
        </div>
      </div>
   
    </>
  );
};

export default SingleArticle;