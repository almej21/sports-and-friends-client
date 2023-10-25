/* eslint-disable no-unused-vars */
import { login, logout } from "features/userInfoSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as ServerApi from "utils/serverApi";
import "./Navbar.css";

// its critical to use the is_logged_in value from the local storage only
//for rendering data that is not private.

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  // this useState is for tracking the loggedIn state,
  // if it changes then refresh the navbar and update
  // the LOGIN and LOGOUT string accordingly.
  const loggedIn = useSelector((state) => state.userInfo.value.is_logged_in);

  useEffect(() => {
    ServerApi.getUserInfo()
      .then((res) => {
        if (res.status === 200) {
          dispatch(login({ ...res.data, is_logged_in: true }));
          // localStorage.setItem("userInfo", JSON.stringify(res.data));
          console.log("res: ", res.data);
        }
      })
      .catch((err) => {
        console.log(err);
        // localStorage.setItem("userInfo", "");
        dispatch(logout());
      });
  }, []);

  return (
    <div className="Navbar">
      <span className="nav-logo">ALMOG</span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <li className="active ">
          <Link className="link" to="/login">
            {localStorage.getItem("userInfo") ? "LOGOUT" : "LOGIN"}
          </Link>
        </li>
        <li>
          <Link className="link" to="/chat">
            CHAT
          </Link>
        </li>
        <li>
          <Link className="link" to="/fixturesplay">
            FIXTURES & PLAY
          </Link>
        </li>
        <li>
          <Link className="link" to="/userinfo">
            USER INFO
          </Link>
        </li>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;
