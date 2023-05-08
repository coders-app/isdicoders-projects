import { RouteObject } from "react-router-dom";
import App from "../components/App/App.tsx";
import NotFoundPage from "../store/pages/NotFoundPage/NotFoundPage.tsx";

const appRoutes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
];

export default appRoutes;
