import { useSelector } from "react-redux";
import HeaderPosts from "./HeaderPosts";
import ContentPost from "./ContentPost";
import PostBtns from "./Btns/PostBtns";
import Comments from "./Comments/Comments";
import Comment from "./Comments/Comment";
import { useState } from "react";

const ClickedPost = () => {
    const [activePost, setActivePost] = useState(true)
    const post = useSelector(state => state.post.currentPost);

    const closeActivePost = () => {
        setActivePost(false)
    }
   const openActivePost = () => {
     setActivePost(true)
   }
    if (!post) {
        return (
            <div className="clickedPost-overlay">
                <div className="clickedPost-container">Loading...</div>
            </div>
        );
    }

    return (
        activePost && (
        <>
        <div className="clickedPost-overlay" onClick={closeActivePost}>
            </div>
            <div className="clickedPost-container">
                <div className="clickedPost-parent">
                  <HeaderPosts post={post} />
                  <ContentPost image={post.image} text={post.text} />
                  <Comment postId={post.post_id} />
                  <PostBtns  liked={post.liked} likes={post.likes} comments={post.comment} post_id={post.post_id} />
                  <Comments/>
                </div>
            </div>
            </>
         )
    );
};

export default ClickedPost;
