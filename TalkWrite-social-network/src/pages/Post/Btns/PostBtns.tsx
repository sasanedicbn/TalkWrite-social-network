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
    const dispatch = useDispatch();
    console.log('postsssssbtn', post)
    const { liked, likes, comments, post_id } = post;
    console.log('iz PostBtns',liked, likes, comments, post_id)

    const showPostHandler = async (id: string) => {
        setActiveId(id);

        try {
            const [comments, singlePost] = await Promise.all([
                CommentsApi(id),
                SinglePostApi(id)
            ]);

            dispatch(getComments(comments));
            dispatch(getSinglePost(singlePost));
        } catch (error) {
            console.error('Error fetching post and comments:', error);
        }
    };

    return (
        <div id="postsBtns-container">
            <LikeBtn liked={liked} likes={likes} post_id={post_id} />
            <CommentBtn showPostHandler={showPostHandler} comments={comments} post_id={post_id} />
            {post_id === activeId && <ClickedPost />}
        </div>
    );
};

export default PostBtns;

