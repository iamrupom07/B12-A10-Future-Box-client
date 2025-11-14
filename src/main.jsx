import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./Root/Root.jsx";
import HomePage from "./Pages/HomePage.jsx";
import Login from "./Components/Login/Login.jsx";
import Register from "./Components/Register/Register.jsx";
import AuthProvider from "./Components/AuthContext/AuthProvider.jsx";
import AddHabitPage from "./Pages/AddHabitPage.jsx";
import PrivateRoute from "./PrivateRoute/PrivateRoute.jsx";
import HabitDetailsPage from "./Pages/HabitDetailsPage.jsx";
import AllHabitPage from "./Pages/AllHabitPage.jsx";
import MyHabitPage from "./Pages/MyHabitPage.jsx";
import HabitProvider from "./Components/HabitContext/HabitProvider.jsx";
import NotFoundPage from "./Pages/NotFoundPage.jsx";
import { ToastContainer } from "react-toastify";
import UserProfile from "./Components/profile/UserProfile.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        loader: () =>
          fetch("https://habittrackerapi.vercel.app/featuredHabits"),
        Component: HomePage,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/addhabit",
        element: (
          <PrivateRoute>
            <AddHabitPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/myhabit",
        element: (
          <PrivateRoute>
            <MyHabitPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/allhabits",
        loader: () => fetch("https://habittrackerapi.vercel.app/allhabits"),
        element: <AllHabitPage />,
      },
      {
        path: "/habitdetails/:id",
        loader: ({ params }) =>
          fetch(`https://habittrackerapi.vercel.app/allhabits/${params.id}`),
        element: (
          <PrivateRoute>
            <HabitDetailsPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",

        element: (
          <PrivateRoute>
            <UserProfile></UserProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <HabitProvider>
        <RouterProvider router={router} />
        <ToastContainer position="top-center" autoClose={2000} />
      </HabitProvider>
    </AuthProvider>
  </StrictMode>
);
