import { FaRegComment, FaRegHeart } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { toggleLike } from '../../store/postsSlice';
import { useState } from 'react';

const PostBtns = ({ liked, likes, comments, post_id }) => {
    const [showClickedPost, setshowClickedPost] = useState(false)
    const dispatch = useDispatch();
    const toggleLikes = () => {
        dispatch(toggleLike(post_id))
    }
    console.log(liked, likes, comments, post_id);
    const showPostHandler = () => {
        setshowClickedPost(state => !state)
    }

    return (
        <div id="postsBtns-container">
            <button className={liked ? 'btn-liked' : 'btn-like'} onClick={showPostHandler}>
                <FaRegHeart size={24} className='like-icon' />{likes}
            </button>
            <button className="btn-comment">
                <FaRegComment size={24} className='comment-icon' />{comments}
            </button>
        </div>
    );
}

export default PostBtns;
