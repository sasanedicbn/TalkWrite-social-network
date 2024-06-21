import { FaRegComment, FaRegHeart } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import ClickedPost from './ClickedPost';

const PostBtns = ({ liked, likes, comments, post_id }) => {
    const [activeId, setActiveId] = useState(null);
    const dispatch = useDispatch();
    
    // const toggleLikes = () => {
    //     dispatch(toggleLike(post_id))
    // }
    // console.log(liked, likes, comments, post_id);

    const showPostHandler = (id) => {
        setActiveId(id);
    };

    console.log(post_id, activeId);

    return (
        <div id="postsBtns-container">
            <button className={liked ? 'btn-liked' : 'btn-like'} onClick={() => showPostHandler(post_id)}>
                <FaRegHeart size={24} className='like-icon' />{likes}
            </button>
            <button className="btn-comment">
                <FaRegComment size={24} className='comment-icon' />{comments}
            </button>
            {post_id === activeId && <ClickedPost post_id={post_id} />}
        </div>
    );
}

export default PostBtns;
