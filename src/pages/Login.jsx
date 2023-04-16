import { LOGIN } from "../services/user-service";

const LoginPage = () => {
  return (
    <div>
      <h1>
        This is login page! Only users that are not logged in can see it,
        otherwise they are immediately redirected to AdminHomepage and they can
        not click on back button to access Login screen.
      </h1>
      Username: <input type="text"></input>
      Password: <input type="password"></input>
      <button type="submit">Login</button>
    </div>
  );
};

export default LoginPage;
