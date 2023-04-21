import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const RouteGuard = ({ children }) => {
  const currentToken = useSelector((state) => state?.token);
  let redirectPathName = "";

  console.log("Token > ", currentToken, ", Page > ", children.type.name);

  if (currentToken && children.type.name === "LoginPage") {
    console.log("ulogiran je i zeli na login page, vratimo ga na admin");
    redirectPathName = "/admin";
  } else if (currentToken === "") {
    console.log("nije ulogiran i zeli bilo gdje, vratimo ga na login");
    redirectPathName = "/login";
  } else {
    console.log("sve u redu");
    return children;
  }

  return <Navigate to={{ pathname: redirectPathName }}></Navigate>;
};

export default RouteGuard;
