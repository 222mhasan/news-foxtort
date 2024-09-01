import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import About from "../pages/About/About";
import Career from "../pages/Career/Career";
import Register from "../pages/Register/Register";
import News from "../pages/News/News";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import PrivtateRoute from "./PrivtateRoute";
import Sports from "../pages/Sports/Sports";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <PageNotFound></PageNotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/news.json"),
      },
      {
        path: "/news/:id",
        element: (
          <PrivtateRoute>
            <News></News>
          </PrivtateRoute>
        ),
        loader: () => fetch("/public/news.json"),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/career",
        element: <Career></Career>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path : "/sports",
        element : <Sports></Sports>
      },

    ],
  },
]);

export default routes;
