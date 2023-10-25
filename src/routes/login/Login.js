import { ChatState } from "context/ChatProvider";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import * as ServerApi from "utils/serverApi";
import ButtonCom from "../../components/Button/ButtonCom";
import InputCom from "../../components/Input/InputCom";
import { login, logout } from "../../features/userInfoSlice";
import "./login.scss";

export default function Login() {
  const [userName, setUserName] = useState("");
  const { setUser } = ChatState();
  const [pass, setPass] = useState("");
  const myRef = useRef(null);
  const dispatch = useDispatch();
  var passInputComponent = document.getElementById("user_pass-input");
  var userNameInputComponent = document.getElementById("user_name-input");

  const shakeUserNameInput = function () {
    console.log(userName);

    userNameInputComponent.classList.add("error");
    setTimeout(() => {
      userNameInputComponent.classList.remove("error");
    }, 1200);
  };

  const shakePassInput = function () {
    passInputComponent.classList.add("error");
    setTimeout(() => {
      passInputComponent.classList.remove("error");
    }, 1200);
  };

  const handleLogin = async (e) => {
    const reqData = {
      email: document.getElementById("user_name-input").value,
      password: document.getElementById("user_pass-input").value,
    };

    await ServerApi.login(reqData)
      .then((data) => {
        localStorage.setItem("userInfo", JSON.stringify(data));
        setUser(data);
        dispatch(login({ ...data, is_logged_in: true }));
      })
      .catch((err) => {
        console.log(err);
        switch (err.response.status) {
          case 401:
            shakePassInput();
            break;

          case 404:
            shakeUserNameInput();
            break;

          default:
        }
      });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleLogin(e);
    }
  };

  const handleLogOut = async (e) => {
    e.preventDefault();
    var res = await ServerApi.logout();

    if (res.status === 200) {
      localStorage.setItem("userInfo", "");
      setUser("");
      dispatch(logout());
    } else {
      console.log(res);
    }
  };

  // useEffect(() => {
  //   const keyDownHandler = (event) => {
  //     console.log("User pressed: ", event.key);

  //     if (event.key === "Enter") {
  //       event.preventDefault();

  //       // 👇️ your logic here
  //       myFunction();
  //     }
  //   };

  //   document.addEventListener("keydown", keyDownHandler);

  //   return () => {
  //     document.removeEventListener("keydown", keyDownHandler);
  //   };
  // }, []);

  return (
    <div className="login-page">
      {localStorage.getItem("userInfo") ? (
        <div className="logged-in">
          <ButtonCom onClick={handleLogOut} btnValue="LOGOUT"></ButtonCom>
        </div>
      ) : (
        <div className="login-form">
          <div className="login-div" ref={myRef}>
            <form id="login-form">
              <InputCom
                inputType="text"
                placeholder="Email address"
                id="user_name"
                inputId="user_name-input"
                className="input-com"
                setValue={setUserName}
                value={userName}
                onKeyDown={handleKeyPress}
              />
              <InputCom
                inputType="password"
                placeholder="Password"
                id="user_pass"
                inputId="user_pass-input"
                className="input-com"
                setValue={setPass}
                value={pass}
                onKeyDown={handleKeyPress}
              />
              <ButtonCom onClick={handleLogin} btnValue="LOGIN"></ButtonCom>
            </form>
            <Link className="new-account-link" to="/register">
              Don't have an account? Register here
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
