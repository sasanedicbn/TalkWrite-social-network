import { useState } from 'react';
import ClickedPost from '../ClickedPost';
import { SinglePostApi } from '../../../api/SinglePostApi';
import { useDispatch } from 'react-redux';
import LikeBtn from './LikeBtn';
import CommentBtn from './CommentBtn';
import { CommentsApi } from '../../../api/CommentsApi';
import { getComments, getSinglePost } from '../../../store/singlePostSlice';

const PostBtns = (post) => {
    const [activeId, setActiveId] = useState('');
    const dispatch = useDispatch()

    const {liked, likes, comments, post_id} = post
    
    const showPostHandler = async (id:string) => {
        setActiveId(id);
        const comments =  await  CommentsApi(id)
        dispatch(getComments(comments))
        const singlePost = await SinglePostApi(id);
        dispatch(getSinglePost(singlePost))
    };
   

    return (
        <div id="postsBtns-container">
           <LikeBtn liked={liked} likes={likes} post_id={post_id}/>
           <CommentBtn showPostHandler={showPostHandler} comments={comments} post_id={post_id}/>
            {post_id === activeId && <ClickedPost />}
        </div>
    );
};

export default PostBtns;
