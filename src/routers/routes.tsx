import { RouteObject, Navigate } from "react-router-dom";
import App from "../components/App/App.tsx";
import NotFoundPage from "../store/pages/NotFoundPage/NotFoundPage.tsx";
import HomePage from "../store/pages/HomePage/HomePage.tsx";

const appRoutes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Navigate to="/home" replace /> },
      { path: "/home", element: <HomePage /> },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
];

export default appRoutes;
