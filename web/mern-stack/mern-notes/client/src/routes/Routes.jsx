import React, { useEffect, useState } from "react";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import NotesList from "../pages/NotesList";
import CreateNote from "../pages/CreateNote";
import DetailNote from "../pages/DetailNote";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import axios from "axios";
import { VERIFY } from "../resources/api";

const Routes = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const verifyUser = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(VERIFY, { withCredentials: true });
        if (response.data && response.data.status) {
          setIsAuth(response.data.status);
        } else {
          setIsAuth(false);
        }
      } catch (error) {
        console.log("Something went wrong ", error);
      } finally {
        setIsLoading(false);
      }
    };
  }, []);

  if (isLoading) return <div>Loading...</div>;

  const router = createBrowserRouter([
    { path: "/signup", element: <Signup /> },
    { 
      path: "/login", 
      element: !isAuth ? <Login /> : <Navigate to={"/"} replace /> 
    },
    {
      path: "/",
      element: isAuth ? <NotesList /> : <Navigate to={"/login"} replace />,
    },
    {
      path: "/notes/create",
      element: isAuth ? <CreateNote /> : <Navigate to={"/login"} replace />,
    },
    {
      path: "/notes/edit/:id",
      element: isAuth ? <DetailNote /> : <Navigate to={"/login"} replace />,
    },
    {
      path: "*",
      element: isAuth ? <NotesList /> : <Navigate to={"/login"} replace />,
    },
  ]);
  return <RouterProvider router={router} />;
};
export default Routes;
