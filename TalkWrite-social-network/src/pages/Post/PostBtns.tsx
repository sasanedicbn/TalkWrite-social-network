import { FaRegComment, FaRegHeart } from "react-icons/fa";

const PostBtns = ({liked,likes,comments}) => {
    console.log(liked,likes,comments)
    return(
        <div id="postsBtns-container">
            <button className="btn-like"> <FaRegHeart size={24} className='like-icon' />{likes}</button>
            <button className="btn-comment"> <FaRegComment size={24} className='comment-icon' />{comments}</button>
        </div>
    )
}
export default PostBtns;