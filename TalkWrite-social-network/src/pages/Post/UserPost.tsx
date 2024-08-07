import { useSelector } from 'react-redux';
import ContentPost from './ContentPost';
import PostBtns from './Btns/PostBtns';
import HeaderPosts from './HeaderPosts';
import { RootState } from '../../store/store';

const UserPost = () => {
    const posts = useSelector((state:RootState) => state.posts.posts.posts);
    
    

    return (
        <div className='userPost-container'>
            {posts?.map((post:any, ) => (
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
