import { useSelector } from "react-redux";
import HeaderPosts from "./HeaderPosts";
import ContentPost from "./ContentPost";
import PostBtns from "./Btns/PostBtns";
import Comments from "./Comments/Comments";
import Comment from "./Comments/Comment";

const ClickedPost = () => {
    const post = useSelector(state => state.post.currentPost);
    
    if (!post) {
        return (
            <div className="clickedPost-overlay">
                <div className="clickedPost-container">Loading...</div>
            </div>
        );
    }

    return (
        <div className="clickedPost-overlay">
            <div className="clickedPost-container">
                <div className="clickedPost-parent">
                  <HeaderPosts post={post} />
                  <ContentPost image={post.image} text={post.text} />
                  <Comment postId={post.post_id} />
                  <PostBtns liked={post.liked} likes={post.likes} comments={post.comment} post_id={post.post_id} />
                  <Comments/>
                </div>
            </div>
        </div>
    );
};

export default ClickedPost;
