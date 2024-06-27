import { FaRegCalendarAlt, FaTrash } from "react-icons/fa";
import { formatedDate } from "../../constants/constants";
import { useSelector, useDispatch } from "react-redux";
import deletePostApi from "../../api/DeletePostApi";
import deleteCommentApi from "../../api/DeleteCommentApi";
import { deletePost, getPosts, deleteComment, getComments } from "../../store/postsSlice";
import { UserPosts } from "../../api/UserPosts";
import { PostComments } from "../../api/PostComments"; // Pretpostavimo da imate API za dobijanje komentara

const Date = ({ post }) => {
  const { user } = post;
  const userName = useSelector(state => state.user.setUser.username);
  const comments = useSelector(state => state.posts.comments);
  const dispatch = useDispatch();

  const handleDeletePost = async () => {
    try {
      const status = await deletePostApi(post.post_id);
      const posts = await UserPosts();
      if (status === 200) {
        dispatch(deletePost(post.post_id));
        dispatch(getPosts(posts));
      } else {
        console.error('Failed to delete post:', status);
      }
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  const handleDeleteComment = async (commentId) => {
    try {
      const status = await deleteCommentApi(commentId);
      const comments = await PostComments(post.post_id); // Pretpostavimo da imate API za dobijanje komentara
      if (status === 200) {
        dispatch(deleteComment(commentId));
        dispatch(getComments(comments));
      } else {
        console.error('Failed to delete comment:', status);
      }
    } catch (error) {
      console.error('Error deleting comment:', error);
    }
  };

  return (
    <div className="date-container">
      <p className='userPost-date'><FaRegCalendarAlt size={24} />{formatedDate(post.created_at)}</p>
      {user.username === userName ? (
        <p id="date-delete" onClick={handleDeletePost}><FaTrash /> Delete</p>
      ) : (
        comments.map(comment => (
          comment.username === userName && (
            <p key={comment.comment_id} id="date-delete" onClick={() => handleDeleteComment(comment.comment_id)}>
              <FaTrash /> Delete
            </p>
          )
        ))
      )}
    </div>
  );
};

export default Date;
