import { useState } from 'react';
import ClickedPost from '../ClickedPost';
import { SinglePostApi } from '../../../api/SinglePostApi';
import { useDispatch } from 'react-redux';
import LikeBtn from './LikeBtn';
import CommentBtn from './CommentBtn';
import { CommentsApi } from '../../../api/CommentsApi';
import { getComments, getSinglePost } from '../../../store/singlePostSlice';

const PostBtns = ({ liked, likes, comments, post_id }) => {
    const [activeId, setActiveId] = useState(null);
    // const [activeComments, setActiveComments] = useState({})
    const dispatch = useDispatch()

    const showPostHandler = async (id) => {
        setActiveId(id);
      const comments =  await  CommentsApi(id)
      console.log('000-0-0-0-0-KOMENTARI ZA TAJ POST',comments)
      dispatch(getComments(comments))
       const singlePost = await SinglePostApi(id);
       console.log('singlePost iz postbtns', singlePost)
       dispatch(getSinglePost(singlePost))
    //    setActiveComments(singlePost)
    
    };
    // console.log('STEJTCINA', activeComments)

    return (
        <div id="postsBtns-container">
           <LikeBtn liked={liked} likes={likes}/>
           <CommentBtn showPostHandler={showPostHandler} comments={comments} post_id={post_id}/>
            {post_id === activeId && <ClickedPost />}
        </div>
    );
};

export default PostBtns;
