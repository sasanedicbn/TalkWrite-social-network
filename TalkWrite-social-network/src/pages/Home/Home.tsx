import HomeContent from "./HomeContent";
import SideBarHome from "./SideBarHome";

const Home = () => {
    return(
       <div className="home-container">
          <SideBarHome/>
          <HomeContent/>
          <div>SLIKA PROFILNA</div>
       </div>
    )
}
export default Home;