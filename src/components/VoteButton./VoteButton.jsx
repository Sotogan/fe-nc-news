import React, { useState } from 'react';
import {  patchArticle } from '../../utils/api.js';
import { useParams } from "react-router-dom"



const VoteButton = ({initVotes}) => {
  const [votes, setvotes] = useState(initVotes);
  const {article_id}=useParams()

    
  const handleVote = () => {
    setvotes(currVotes =>currVotes + 1)
    patchArticle(article_id).then((response)=>{
   setvotes(response)
    
    })
    .catch(error => {
       setvotes(currVotes => currVotes - 1);
      console.error('Error updating vote:', error);
    });
  };

  return (
    <div>
      <button onClick={handleVote}>Vote</button>
      <span>{votes} {votes === 1 ? 'vote' : 'votes'}</span>
    </div>
  );
};

export default VoteButton;