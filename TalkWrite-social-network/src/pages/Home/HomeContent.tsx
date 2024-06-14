import { FaMicrophone } from "react-icons/fa";

const HomeContainer = () => {
    return(
        <div>
            <div>
              <form>
                <div>
                 <img src="./public/profile.img"></img>
                 <input type="text" placeholder="What's happening" id="input-happening"/>
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
export default HomeContainer;