import { FaMicrophone } from "react-icons/fa";
import SinglePost from "../Post/SinglePost";

const HomeContent = () => {
    return(
        <div className="container-homecontent">
            <div>
              <form>
                <div>
                 <img src="./public/profile.img"></img>
                 <input type="text" placeholder="What's happening" className="input-happening" />
                </div>
                <div>
                  <FaMicrophone size={50} color="blue" />
                  <button>New Post</button>
                </div>
              </form>
            </div>
            <SinglePost/>
        </div>
    )
}
export default HomeContent;