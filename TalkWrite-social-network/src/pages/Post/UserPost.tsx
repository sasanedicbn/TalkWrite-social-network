import { useSelector } from 'react-redux';

const PostUser = () => {
    const postsData = useSelector(state => state.posts.posts);
    const {posts} = postsData;
    console.log('ASDJHKKJASDHJKAHDJKAS', posts);

    return (
        <div>
            {posts?.map((post, index) => (
                <div key={index}>
                    <div>
                        <img src={post.user.picture} alt={post.user.full_name}/>
                        <p>{post.user.username}</p>
                        <p>{post.user.full_name}</p>
                    </div>
                    <div>
                        <p>{post.created_at}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PostUser;
