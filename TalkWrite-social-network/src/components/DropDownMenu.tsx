import { FaSignOutAlt, FaUser } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const DropDownMenu = () => {
    const navigate = useNavigate();

    const logOutUser = () => {
        localStorage.removeItem('jwt');
        navigate('/');
    };

    return (
        <div className="dropDownMenu">
            <div>
                <FaUser />
                <p>My Profile</p>
            </div>
            <div onClick={logOutUser}>
                <FaSignOutAlt />
                <p>Log out</p>
            </div>
        </div>
    );
};

export default DropDownMenu;
