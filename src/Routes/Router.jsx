import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import Biodatas from "../pages/Biodatas/Biodatas";
import Register from "../pages/Register/Register";

import CardDetails from "../pages/Home/PremiumMember/CardDetails";

import AdminDasboard from "../pages/AdminDasboard/AdminDasboard";
import ManageUsers from "../pages/AdminDasboard/ManageUsers";
import ApprovedPremium from "../pages/AdminDasboard/ApprovedPremium";
import ApprovedContactReq from "../pages/AdminDasboard/ApprovedContactReq";
import MyProfile from "../pages/UserDashboard/MyProfile";
import EditBiodata from "../pages/UserDashboard/EditBiodata";
import MyContactRequest from "../pages/UserDashboard/MyContactRequest";
import FavouritesBiodata from "../pages/UserDashboard/FavouritesBiodata";
import Dashboard from "../Layout/DashBoards";
import PrivateRoute from "./PrivateRoute";
import Error from "../Shared/Error";
import Contact from "../pages/Contact";
import AboutUsPage from "../pages/AboutUsPage";
import AdminRoute from "./AdminRoute";
import UpdateBiodata from "../pages/UserDashboard/UpdateBiodata";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/biodatas",
        element: (
          <PrivateRoute>
            {" "}
            <Biodatas></Biodatas>
          </PrivateRoute>
        ),
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/aboutUsPage",
        element: <AboutUsPage></AboutUsPage>,
      },
      {
        path: "/cardDetails/:id",
        element: (
          <PrivateRoute>
            <CardDetails></CardDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(` http://localhost:5000/biodata/${params.id}`),
        // http://localhost:5000
        // https://metromony-server-sepia.vercel.app
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    errorElement: <Error></Error>,
    children: [
      {
        path: "adminDashboard",
        element: (
          <AdminRoute>
            <AdminDasboard></AdminDasboard>
          </AdminRoute>
        ),
      },
      {
        path: "manageUsers",
        element: (
          <AdminRoute>
            <ManageUsers></ManageUsers>
          </AdminRoute>
        ),
      },
      {
        path: "approvedPremium",
        element: (
          <AdminRoute>
            <ApprovedPremium></ApprovedPremium>
          </AdminRoute>
        ),
      },
      {
        path: "approvedContactReq",
        element: (
          <AdminRoute>
            <ApprovedContactReq></ApprovedContactReq>
          </AdminRoute>
        ),
      },

      //user Dashboard
      {
        path: "myProfile",
        element: <MyProfile></MyProfile>,
      },
      {
        path: "editBiodata",
        element: <EditBiodata></EditBiodata>,
      },
      {
        path: "myContactReq",
        element: <MyContactRequest></MyContactRequest>,
      },
      {
        path: "favouritesBiodata",
        element: <FavouritesBiodata></FavouritesBiodata>,
      },
      {
        path: "updateBiodata",
        element: <UpdateBiodata></UpdateBiodata>,
      },
    ],
  },
]);
