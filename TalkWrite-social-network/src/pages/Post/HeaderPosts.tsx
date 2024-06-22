import Date from "./Date";

const HeaderPosts = ({ post }) => {
    console.log(post, '----------------')
    return (
        <div>
            <div>
                <img src={post.user.picture} alt={post.user.full_name} />
                <div className='user-details'>
                    <p>@{post.user.username}</p>
                    <p>{post.user.full_name}</p>
                </div>
            </div>
            <Date post={post}/>
        </div>
    );
};

export default HeaderPosts;
