import HomeContent from "./HomeContent";
import SideBarHome from "./SideBarHome";
import ProfileHome from "./ProfileHome";

const Home = () => {
       const data = new FormData()
       data.append("POST", "123")
       console.log("DATA2",data.get("POST"))
      //  console.log()
    return(
       <div className="home-container">
          <SideBarHome/>
          <HomeContent/>
          <ProfileHome/>
       </div>
    )
}
export default Home;