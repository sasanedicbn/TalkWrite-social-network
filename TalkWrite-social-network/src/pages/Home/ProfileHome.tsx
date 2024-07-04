import { useState } from "react";
import DropDownMenu from "../../components/DropDownMenu";

const ProfileHome = () => {
    const [showDownMenu, setShowDownMenu] = useState(false)

  
    return(
        <>
         <div className="container-profileHome">
              <img src="./public/profile.img" className="profile-img"/>
         </div>
         {showDownMenu && <DropDownMenu/>}
        </>
    )
}
export default ProfileHome;