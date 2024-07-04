import { FaSignOutAlt, FaUser } from "react-icons/fa";
import { useHistory } from 'react-router-dom'; 

const DropDownMenu = () => {
    const logOutUser = () => {
        const history = useHistory()
        localStorage.removeItem('jwt')
        history.push('/')
        
    }
    return(
        <div className="dropDownMenu">
          <div>
            <FaUser/>
            <p>My Profile</p>
          </div>
          <div>
            <FaSignOutAlt/>
            <p>Log out</p>
          </div>
        </div>
    )
}
export default DropDownMenu;