import { useSelector } from "react-redux";
import HeaderPosts from "../HeaderPosts";

const Comments = () => {
    const usersComments = useSelector(state => state.posts.comments.comments);
    
    if (!usersComments) {
        return (
            <div>
                Loading
            </div>
        );
    }

    console.log('srbija', usersComments);
    return (
        <div>
            {usersComments.map((user, index) => (
                <HeaderPosts key={index} post={user} />
            ))}
        </div>
    );
};

export default Comments;
