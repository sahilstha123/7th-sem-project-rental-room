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
import { Layout, RequireAuth } from "./routes/layout/Layout";
import ProfilePage from "./routes/porfilePage/profilePage";
import ProfileUpdatePage from "./routes/ProfileUpdatePage/ProfileUpdatePage";
import { NewPostPage } from "./routes/newPostPage/newPostPage";
import { listPageLoader, singlePageLoader } from "./lib/Loaders";

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
          Loader: listPageLoader,
        },
        {
          path: "/:id",
          element: <Singlepage />,
          Loader: singlePageLoader,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
    {
      path: "/",
      element: <RequireAuth />,
      children: [
        {
          path: "/profile",
          element: <ProfilePage />,
        },
        {
          path: "/profile/update",
          element: <ProfileUpdatePage />,
        },
        {
          path: "/add",
          element: <NewPostPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
