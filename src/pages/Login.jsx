import { useState } from "react";
import { LOGIN } from "../services/user-service";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.password);
  };

  const handleSubmit = () => {
    console.log("Login button clicked");
    setErrorMsg("");
    LOGIN()
      .then((res) => {
        dispatch({ type: "login", payload: res });
        navigate("/admin");
      })
      .catch((e) => {
        console.log("Error > ", e.response.data.message);
        setErrorMsg(e.response.data.message);
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
      {errorMsg && <div style={{ color: "red" }}>{errorMsg}</div>}
    </div>
  );
};

export default LoginPage;
