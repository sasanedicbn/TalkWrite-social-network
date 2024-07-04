import { useState } from "react";
import DropDownMenu from "../../components/DropDownMenu";

const ProfileHome = () => {
    const [showDownMenu, setShowDownMenu] = useState(false)

    const toggleDownMenu = () => {
       setShowDownMenu(state => !state)
    }
    return(
        <>
         <div className="container-profileHome">
              <img src="./public/profile.img" className="profile-img" onClick={toggleDownMenu}/>
         </div>
         {showDownMenu && <DropDownMenu/>}
        </>
    )
}
export default ProfileHome;