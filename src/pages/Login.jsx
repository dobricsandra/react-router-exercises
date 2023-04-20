import { useState } from "react";
import { LOGIN } from "../services/user-service";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.password);
  };

  const handleSubmit = () => {
    console.log("Login button clicked");
    LOGIN().then((res) => {
      console.log("LOGIN RES TOKEN >", res);
      dispatch({ type: "login", payload: res });
      navigate("/admin");
    });
  };

  return (
    <div>
      <h1>
        This is login page! Only users that are not logged in can see it,
        otherwise they are immediately redirected to AdminHomepage and they can
        not click on back button to access Login screen.
      </h1>
      Username: <input type="text" onChange={handleUsernameChange}></input>
      Password: <input type="password" onChange={handlePasswordChange}></input>
      <button type="submit" onClick={handleSubmit}>
        Login
      </button>
    </div>
  );
};

export default LoginPage;
