import { useSelector } from "react-redux";
import HeaderPosts from "./HeaderPosts";
import ContentPost from "./ContentPost";

const ClickedPost = () => {
    const post = useSelector(state => state.posts.singlePost.post);

    console.log('clickeddddd', post);
    
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
                </div>
            </div>
        </div>
    );
};

export default ClickedPost;
