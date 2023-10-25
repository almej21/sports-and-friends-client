/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { login, logout } from "features/userInfoSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./userinfo.scss";

export default function Userinfo() {
  const userInfo = useSelector((state) => state.userInfo.value);
  const dispatch = useDispatch();

  useEffect(() => {
    axios({
      url: "http://localhost:4000/user/userinfo",
      method: "GET",
      withCredentials: true,
    })
      .then((res) => {
        if (res.status === 200) {
          dispatch(login({ ...res.data, is_logged_in: true }));
          console.log("res: ", res.data);
        } else {
          dispatch(logout());
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch(logout());
      });
  }, []);

  return (
    <div className="userinfo-div">
      {!localStorage.getItem("userInfo") ? (
        <div className="logged-out-user-info">
          <h1 className="title">Please Login to view Info</h1>
        </div>
      ) : (
        <div className="logged-in-user-info">
          <h1>User name: {userInfo.user_name}</h1>
          <h2>Email: {userInfo.email}</h2>
          <h2>ID: {userInfo._id}</h2>
          <h2>Points: {userInfo.points}</h2>
        </div>
      )}
    </div>
  );
}
