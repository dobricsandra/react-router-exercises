import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const RouteGuard = ({ children }) => {
  const currentToken = useSelector((state) => state?.token);
  let redirectPathName = "";

  // user je logiran i zeli na login page, vratimo ga na admin page
  if (currentToken && children.type.name === "LoginPage") {
    redirectPathName = "/admin";

    // user nije ulogiran i nije vec na login page-u, vratimo ga na login page
  } else if (currentToken === "" && children.type.name !== "LoginPage") {
    redirectPathName = "/login";

    // inace ga redirectamo na stranicu na koju zeli ici
  } else {
    return children;
  }

  return <Navigate to={{ pathname: redirectPathName }}></Navigate>;
};

export default RouteGuard;
