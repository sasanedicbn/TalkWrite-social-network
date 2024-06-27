import { FaRegCalendarAlt, FaTrash } from "react-icons/fa"
import { formatedDate } from "../../constants/constants"
import { useSelector } from "react-redux";

const Date = ({post}) => {
  const {user} = post;
  const userName = useSelector(state => state.user.setUser.username)
    return(
        <div className="date-container">
          <p className='userPost-date'><FaRegCalendarAlt size={24} />{formatedDate(post.created_at)}</p>
          {user.username === userName ? <p id="date-delete"><FaTrash/> Delete</p> : ''}
        </div>
    )
}
export default Date