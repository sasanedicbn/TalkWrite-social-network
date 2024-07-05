import { useSelector } from 'react-redux';
import ContentPost from './ContentPost';
import PostBtns from './Btns/PostBtns';
import HeaderPosts from './HeaderPosts';
import { Fragment } from 'react/jsx-runtime';
import { RootState } from '../../store/store';

const UserPost = () => {
    const postsData = useSelector((state:RootState) => state.posts.posts);
    const { posts } = postsData;
    

    return (
        <div className='userPost-container'>
            {posts?.map((post:any, index:string) => (
                <Fragment key={index}>
                 <HeaderPosts post={post} />
                 <ContentPost image={post.image} text={post.text} />
                 <PostBtns liked={post.liked} likes={post.likes} comments={post.comments} post_id={post.post_id}/>
                </Fragment>
            ))}
        </div>
    );
};

export default UserPost;
