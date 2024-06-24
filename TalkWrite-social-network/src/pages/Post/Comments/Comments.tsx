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
        <div className="comments-container">
             <h3>{usersComments.length + 'comments'}</h3>
            {usersComments.map((user, index) => (
                <>
                 <HeaderPosts key={index} post={user} />
                  <p className="comments-text">{user.text}</p>
                </>
            ))}
        </div>
    );
};

export default Comments;
