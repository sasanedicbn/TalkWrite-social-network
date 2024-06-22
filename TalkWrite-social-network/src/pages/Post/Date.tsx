import { FaRegCalendarAlt } from "react-icons/fa"
import { formatedDate } from "../../constants/constants"

const Date = ({post}) => {
    return(
        <div>
          <p className='userPost-date'><FaRegCalendarAlt size={24} />{formatedDate(post.created_at)}</p>
        </div>
    )
}
export default Date