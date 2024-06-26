import { useSelector } from "react-redux";
import Date from "./Date";

const HeaderPosts = ({ post }) => {

    return (
        <div>
            <div>
                <img src={post.user?.picture || post.picture} alt={post.user?.full_name || post.full_name} />
                <div className='user-details'>
                    <p>@{post.user?.username || post.username}</p>
                    <p>{post.user?.full_name || post.full_name}</p>
                </div>
            </div>
            <Date post={post}/>
        </div>
    );
};

export default HeaderPosts;
