import WelcomePage from "../pages/WelcomePage";
import AdminHomepage from "../pages/AdminHomepage";
import Login from "../pages/Login";
import NotFoundPage from "../pages/NotFoundPage";
import RouteGuard from "./RouteGuard";

const routes = [
  {
    path: "/login",
    element: (
      <RouteGuard>
        <Login />
      </RouteGuard>
    ),
  },
  {
    path: "/admin",
    element: (
      <RouteGuard>
        <AdminHomepage />
      </RouteGuard>
    ),
  },
  {
    path: "/not-found",
    element: <NotFoundPage />,
  },
  {
    path: "/",
    element: <WelcomePage />,
  },
];

export default routes;
