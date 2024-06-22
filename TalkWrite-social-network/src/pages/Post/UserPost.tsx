import { useSelector } from 'react-redux';
import ContentPost from './ContentPost';
import PostBtns from './Btns/PostBtns';
import HeaderPosts from './HeaderPosts';

const UserPost = () => {
    const postsData = useSelector(state => state.posts.posts);
    const { posts } = postsData;
    
    console.log(posts, 'jebemtisve')

    return (
        <div className='userPost-container'>
            {posts?.map((post, index) => (
                <>
                <HeaderPosts post={post} />
                <ContentPost image={post.image} text={post.text} />
                <PostBtns liked={post.liked} likes={post.likes} comments={post.comments} post_id={post.post_id}/>
                </>
            ))}
        </div>
    );
};

export default UserPost;
