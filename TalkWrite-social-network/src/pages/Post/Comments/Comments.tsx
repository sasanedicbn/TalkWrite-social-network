import { useSelector } from "react-redux";
import HeaderPosts from "../HeaderPosts";
import { FaTrash } from "react-icons/fa";
import { useEffect } from "react";

const Comments = () => {
    const usersComments = useSelector(state => state.post.comments);
    console.log('COMMENTS', usersComments)
  
    
    if (!usersComments) {
        return (
            <div>
                Loading
            </div>
        );
    }
    useEffect((() => {
     console.log('komentari',usersComments)
    }), [usersComments])

    // console.log('srbija', usersComments);
    return (
        <div className="comments-container">
             <h3>{usersComments.length + 'comments'}</h3>
            {usersComments.map((user, index) => (
                <>
                 <HeaderPosts key={index} post={user} />
                 <div className="container-comments-text">
                    <p className="comments-text">{user.text}</p>
                   { <span><FaTrash /></span>}
                  </div>
                </>
            ))}
        </div>
    );
};

export default Comments;
