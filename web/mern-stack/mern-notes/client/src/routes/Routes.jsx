
import { createBrowserRouter, RouterProvider } from "react-router";
import NotesList from "../pages/NotesList";
import CreateNote from "../pages/CreateNote";
import DetailNote from "../pages/DetailNote";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import ForgotPassword from "../pages/auth/ForgotPassword";
import VerifyOtp from "../pages/auth/VerifyOtp";
import ResetPassword from "../pages/auth/ResetPassword";

const Routes = () => {
  const router = createBrowserRouter([
    { path: "/signup", element: <Signup /> },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/forgot-password",
      element: <ForgotPassword />,
    },
    {
      path: "/verify-otp",
      element: <VerifyOtp />,
    },
    {
      path: "/reset-password",
      element: <ResetPassword />,
    },
    {
      path: "/",
      element: <NotesList />,
    },
    {
      path: "/notes/create",
      element: <CreateNote />,
    },
    {
      path: "/notes/edit/:id",
      element: <DetailNote />,
    },
    {
      path: "*",
      element: <NotesList />,
    },
  ]);
  return <RouterProvider router={router} />;
};
export default Routes;
