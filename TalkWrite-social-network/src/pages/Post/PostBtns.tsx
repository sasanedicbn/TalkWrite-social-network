import { FaRegComment, FaRegHeart } from "react-icons/fa";

const PostBtns = () => {
    return(
        <div>
            <button className="btn-like"> <FaRegHeart size={24} className='like-icon' /></button>
            <button className="btn-comment"> <FaRegComment size={24} className='comment-icon' /></button>
        </div>
    )
}
export default PostBtns;