import { useSelector } from "react-redux";
import HeaderPosts from "./HeaderPosts";
import ContentPost from "./ContentPost";
import Comment from "./Comments/Comment";
import PostBtns from "./Btns/PostBtns";
import Comments from "./Comments/Comments";

const ClickedPost = () => {
    const post = useSelector(state => state.posts.singlePost.post);
    console.log('ssssssse21312',post)
    
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
