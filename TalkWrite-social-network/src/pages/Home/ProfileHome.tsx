import DropDownMenu from "../../components/DropDownMenu";

const ProfileHome = () => {
    return(
        <>
         <div className="container-profileHome">
              <img src="./public/profile.img" className="profile-img"/>
         </div>
         <DropDownMenu/>
        </>
    )
}
export default ProfileHome;