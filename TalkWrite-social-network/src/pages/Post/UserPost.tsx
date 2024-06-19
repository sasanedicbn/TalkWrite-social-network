import { FaRegCalendarAlt } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { formatedDate } from '../../constants/constants';

const UserPost = () => {
    const postsData = useSelector(state => state.posts.posts);
    const {posts} = postsData;
    console.log('ASDJHKKJASDHJKAHDJKAS', posts);

    return (
        <div className='userPost-container'>
            {posts?.map((post, index) => (
                <div key={index}>
                    <div>
                          <img src={post.user.picture} alt={post.user.full_name}/>
                        <div className='user-details'>
                          <p>@{post.user.username}</p>
                          <p>{post.user.full_name}</p>
                        </div>
                    </div>
                    <div>
                        <p><FaRegCalendarAlt size={24} />{formatedDate(post.created_at)}</p>
                    </div>
                </div>
            ))}
            
        </div>
    );
};

export default UserPost;
