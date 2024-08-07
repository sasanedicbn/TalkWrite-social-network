import { useDispatch, useSelector } from 'react-redux';
import HeaderPosts from '../HeaderPosts';
import { FaTrash } from 'react-icons/fa';
import deleteCommentApi from '../../../api/DeleteCommentApi';
import { deleteComment } from '../../../store/singlePostSlice';
import Spinner from '../../../store/Globall/Spinner';
import { RootState } from '../../../store/store';

const Comments = () => {
  const usersComments = useSelector((state:RootState) => state.post.currentPost.comments);
  const userName = useSelector((state:RootState) => state.user.setUser?.username);
  const currentPostId = useSelector((state:RootState) => state.post.currentPost.user_id)

  const dispatch = useDispatch()



  if (!usersComments) {
    return (
      <div>
         <Spinner/>
      </div>
    );
  }
   const handleDeleteComment = async (postId:string,commentId:string) => {
    console.log(commentId)
    try {
      const status = await deleteCommentApi(postId,commentId);
      if (status === 200) {
        dispatch(deleteComment(commentId));
      } else {
        console.error('Failed to delete comment:', status);
      }
    } catch (error) {
      console.error('Error deleting comment:', error);
    }
  };

  return (
    <div className="comments-container">
      <h3>{usersComments.length + ' comments'}</h3>
      {usersComments.map((user, index) => (
        <>
          <HeaderPosts post={user} />
         <div className="container-comments-text">
         <p className="comments-text">{user.text}</p>
         {user.username === userName ? <span className='trash' onClick={() => handleDeleteComment(currentPostId,user.comment_id)}>
            <FaTrash /></span> : ''}
       </div>
       </>
      ))}
    </div>
  );
};


export default Comments;


