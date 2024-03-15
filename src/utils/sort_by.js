export const sortArticles =(articles,sortBy,sortOrder)=>{

return [...articles].sort((a, b) => {
    if (sortBy === 'created_at') {
      if (sortOrder === 'asc') {
        return new Date(a.created_at) - new Date(b.created_at);
      } else {
        return new Date(b.created_at) - new Date(a.created_at);
      }
    }
    if (sortBy === 'comments') {
      if (sortOrder === 'asc') {
        return a.comment_count - b.comment_count;
      } else {
        return b.comment_count - a.comment_count;
      }
    }
    if (sortBy === 'votes') {
      if (sortOrder === 'asc') {
        return a.votes - b.votes;
      } else {
        return b.votes - a.votes;
      }
    }
  
  });
}