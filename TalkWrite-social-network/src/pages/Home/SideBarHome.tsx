import { FaHome } from "react-icons/fa";

const SideBarHome = () => {
    return(
        <aside className="sideBarHome-container">
             <h1>TalkWrite</h1>
             <div className="sideBarHome-home">
              <FaHome size={30} color="blue" />
              <p>Home</p>
             </div>
        </aside>
    )
}
export default SideBarHome;