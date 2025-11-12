import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./Root/Root.jsx";
import HomePage from "./Pages/HomePage.jsx";
import Login from "./Components/Login/Login.jsx";
import Register from "./Components/Register/Register.jsx";
import AuthProvider from "./Components/AuthContext/AuthProvider.jsx";
import AddHabitPage from "./Pages/AddHabitPage.jsx";
import PrivateRoute from "./PrivateRoute/PrivateRoute.jsx";
import HabitDetails from "./Components/HabitDetails/HabitDetails.jsx";
import HabitDetailsPage from "./Pages/HabitDetailsPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        loader: () => fetch("http://localhost:3000/featuredHabits"),
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
            <AddHabitPage></AddHabitPage>
          </PrivateRoute>
        ),
      },
      {
        path: "/habitdetails/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/allhabits/${params.id}`),
        element: (
          <PrivateRoute>
            <HabitDetailsPage></HabitDetailsPage>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
