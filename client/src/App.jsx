import { useState } from "react";
import "./App.css";
// import { Navbar } from "./components/nav/Navbar";
import { Homepage } from "./routes/homepage/Homepage"; // Import Homepage correctly
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListPage from "./routes/listPage/ListPage";
// import { Layout } from "./routes/layout/Layout";
import "./routes/layout/layout.scss";
import { Singlepage } from "./routes/SinglePage/Singlepage";
import Register from "./routes/Register/Register";
import Login from "./routes/login/Login";
import Layout from "./routes/layout/Layout";
import ProfilePage from "./routes/porfilePage/profilePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/", // Homepage route
          element: <Homepage />,
        },
        {
          path: "/list", // List page route
          element: <ListPage />,
        },
        {
          path: "/:id",
          element: <Singlepage />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/profile",
<<<<<<< HEAD
          element: <ProfilePage />,
        },
=======
          element: <ProfilePage />
        }
>>>>>>> 2061da3d9a997083a7a707046c1f90edcc7cbb23
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
