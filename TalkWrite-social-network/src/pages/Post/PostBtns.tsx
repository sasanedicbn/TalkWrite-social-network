import { FaRegComment, FaRegHeart } from 'react-icons/fa';
import { useState } from 'react';
import ClickedPost from './ClickedPost';
import { SinglePostApi } from '../../api/SinglePostApi';
import { useDispatch } from 'react-redux';

const PostBtns = ({ liked, likes, comments, post_id }) => {
    const [activeId, setActiveId] = useState(null);
    const dispatch = useDispatch();
   
    const showPostHandler = async (id) => {
        setActiveId(id);
        await SinglePostApi(id, dispatch);
    };

    return (
        <div id="postsBtns-container">
            <button className={liked ? 'btn-liked' : 'btn-like'} >
                <FaRegHeart size={24} className='like-icon' />{likes}
            </button>
            <button className="btn-comment" onClick={() => showPostHandler(post_id)}>
                <FaRegComment size={24} className='comment-icon' />{comments}
            </button>
            {post_id === activeId && <ClickedPost post_id={post_id} />}
        </div>
    );
}

export default PostBtns;
