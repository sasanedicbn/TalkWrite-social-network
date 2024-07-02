import { FaRegHeart } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import UnlikePostApi from "../../../api/UnlikePostApi";
import { likePost, unlikePost } from "../../../store/postsSlice";
import LikePostApi from "../../../api/LikePostApi";


const LikeBtn = ({ likes, liked, post_id }) => {
  const dispatch = useDispatch();

  const handleLikePost = async () => {
    try {
      if (liked) {
        await UnlikePostApi(post_id);
        dispatch(unlikePost(post_id));
      } else {
        await LikePostApi(post_id);
        dispatch(likePost(post_id));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button className={liked ? 'btn-liked' : 'btn-like'} onClick={handleLikePost}>
      <FaRegHeart size={24} className='like-icon' />{likes}
    </button>
  );
};

export default LikeBtn;
