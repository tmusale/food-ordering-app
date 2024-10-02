import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="flex justify-between bg-pink-50">
      <div className="w-20">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul className="flex justify-evenly">
          <li className="py-4 px-4">
            OnlineStatus: {onlineStatus ? "✅" : "🔴"}
          </li>
          <li className="py-4 px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="py-4 px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="py-4 px-4">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="py-4 px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="py-4 px-4">Cart</li>
          <button
            className="py-4 px-4"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="py-4 px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
