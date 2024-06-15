import { FaMicrophone } from "react-icons/fa";

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
        </div>
    )
}
export default HomeContent;