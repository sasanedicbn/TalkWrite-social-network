import { FaRegCalendarAlt, FaTrash } from "react-icons/fa";
import { formatedDate } from "../../constants/constants";
import { useSelector, useDispatch } from "react-redux";
import deletePostApi from "../../api/DeletePostApi";
import { deletePost, getPosts } from "../../store/postsSlice";
import { UserPosts } from "../../api/UserPosts";


const Date = ({ post }) => {
  const { user } = post;
  const userName = useSelector(state => state.user.setUser.username);
  const dispatch = useDispatch();

  const handleDeletePost = async () => {
    try {
      const status = await deletePostApi(post.post_id);
      const posts = await UserPosts()
      if (status === 200) {
        dispatch(deletePost(post.post_id));
        dispatch(getPosts(posts))
      } else {
        console.error('Failed to delete post:', status);
      }
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return (
    <div className="date-container">
      <p className='userPost-date'><FaRegCalendarAlt size={24} />{formatedDate(post.created_at)}</p>
      {user.username === userName ? <p id="date-delete" onClick={handleDeletePost}><FaTrash /> Delete</p> : ''}
    </div>
  );
};

export default Date;
