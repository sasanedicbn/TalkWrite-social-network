import { FaRegCalendarAlt } from "react-icons/fa";
import { formatedDate } from "../../constants/constants";

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
            <div>
                <p className='userPost-date'><FaRegCalendarAlt size={24} />{formatedDate(post.created_at)}</p>
            </div>
        </div>
    );
};

export default HeaderPosts;
