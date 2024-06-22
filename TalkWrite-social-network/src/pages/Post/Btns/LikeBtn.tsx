import { FaRegHeart } from "react-icons/fa";

const LikeBtn = ({likes,liked}) => {
    return(
        <button className={liked ? 'btn-liked' : 'btn-like'}>
        <FaRegHeart size={24} className='like-icon' />{likes}
    </button>
    )
}

export default LikeBtn;