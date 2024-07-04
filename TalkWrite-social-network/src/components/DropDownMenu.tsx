import { FaSignOutAlt, FaUser } from "react-icons/fa";

const DropDownMenu = () => {
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