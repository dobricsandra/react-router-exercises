// import { Navigate } from "react-router";

const RouteGuard = ({ children }) => {
  // saznati je li user ulogiran, ako nije, redirectati ga na login page
  // const isUserLoggedIn = LOGIN();
  // console.log("current page: ", children.type.name);
  // let redirectPathname = "/";
  // if (children.type.name === "AdminHomepage") {
  //   redirectPathname = "/login";
  // }

  // ako je user ulogiran,
  // return children; inace, return pathname

  // return (
  //   <Navigate
  //     to={{
  //       pathname: redirectPathname,
  //     }}
  //   />
  // );
  return children;
};

export default RouteGuard;
