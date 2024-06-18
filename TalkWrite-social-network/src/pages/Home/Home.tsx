import HomeContent from "./HomeContent";
import SideBarHome from "./SideBarHome";
import ProfileHome from "./ProfileHome";
import PostUser from "../Post/PostUser";

const Home = () => {
    return(
       <div className="home-container">
          <SideBarHome/>
          <HomeContent/>
          <ProfileHome/>
          <PostUser/>
       </div>
    )
}
export default Home;