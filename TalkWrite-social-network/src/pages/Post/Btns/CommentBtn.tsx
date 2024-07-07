import { FaRegComment } from "react-icons/fa";

const CommentBtn = ({showPostHandler, post_id, comments}) => {
    console.log('commentsBtn', post_id, comments)
    return(
        <button className="btn-comment" onClick={() => showPostHandler(post_id)}>
        <FaRegComment size={24} className='comment-icon' />{comments}
    </button>
    )
}
export default CommentBtn;