import { FaRegCalendarAlt, FaTrash } from "react-icons/fa";
import { formatedDate } from "../../constants/constants";
import { useSelector, useDispatch } from "react-redux";
import deletePostApi from "../../api/DeletePostApi";
import { deletePost, getPosts } from "../../store/postsSlice";
import { UserPosts } from "../../api/UserPosts";
import { RootState } from "../../store/store";
import { Post } from "../../types/singlePostType";

type DateProps = {
  post: Post;
}

const Date: React.FC<DateProps> = ({ post }) => {
  const { user } = post;
  const userName = useSelector((state: RootState) => state.user.setUser?.username);
  const dispatch = useDispatch();

  const handleDeletePost = async () => {
    try {
      const [status, posts] = await Promise.all([
        deletePostApi(post.post_id),
        UserPosts()
      ])
      
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

  return (
    <div className="date-container">
      <p className='userPost-date'><FaRegCalendarAlt size={24} />{formatedDate(post.created_at)}</p>
      {user?.username === userName ? <p id="date-delete" onClick={handleDeletePost}><FaTrash /> Delete</p> : ''}
    </div>
  );
};

export default Date;
