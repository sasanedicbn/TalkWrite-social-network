import { useSelector } from 'react-redux';
import HeaderPosts from '../HeaderPosts';
import { FaTrash } from 'react-icons/fa';

const Comments = () => {
  const usersComments = useSelector(state => state.post.currentPost.comments);
  const userName = useSelector(state => state.user.setUser.username);
  console.log(usersComments)

  console.log('COMMENTS', usersComments);

  if (!usersComments) {
    return (
      <div>
        Loading...
      </div>
    );
  }
   // const handleDeleteComment = async (commentId) => {
  //   try {
  //     const status = await deleteCommentApi(commentId);
  //     const comments = await CommentsApi(post.post_id); 
  //     if (status === 200) {
  //       dispatch(deleteComment(commentId));
  //       dispatch(getComments(comments));
  //     } else {
  //       console.error('Failed to delete comment:', status);
  //     }
  //   } catch (error) {
  //     console.error('Error deleting comment:', error);
  //   }
  // };

  return (
    <div className="comments-container">
      <h3>{usersComments.length + ' comments'}</h3>
      {usersComments.map((user, index) => (
        <>
          <HeaderPosts post={user} />
         <div className="container-comments-text">
         <p className="comments-text">{user.text}</p>
         {user.username === userName ? <span className='trash'><FaTrash /></span> : ''}
       </div>
       </>
      ))}
    </div>
  );
};


export default Comments;


