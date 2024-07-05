import HomeContent from "./HomeContent";
import SideBarHome from "./SideBarHome";
import ProfileHome from "./ProfileHome";

const Home = () => {
    return(
       <div className="home-container">
          <SideBarHome/>
          <HomeContent/>
          <ProfileHome/>
       </div>
    )
}
export default Home;