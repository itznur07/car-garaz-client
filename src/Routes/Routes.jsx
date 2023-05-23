import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Checkout from "../Pages/Checkout/Checkout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Orders from "../Pages/Orders/Orders";
import Signup from "../Pages/Signup/Signup";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoutes>
            <Checkout></Checkout>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://car-doctor-server-two-eta.vercel.app/services/${params.id}`
          ),
      },
      {
        path: "/orders",
        element: (
          <PrivateRoutes>
            {" "}
            <Orders></Orders>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default router;
