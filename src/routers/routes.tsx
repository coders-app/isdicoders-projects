import { RouteObject, Navigate } from "react-router-dom";
import routerPaths from "../constants/routerPaths/routerPaths";
import App from "../components/App/App";
import ChallengesPage from "../pages/Challenges/Challenges";

const routes: RouteObject[] = [
  {
    path: routerPaths.base,
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to={routerPaths.challenges} replace />,
      },
      { path: routerPaths.challenges, element: <ChallengesPage /> },
    ],
  },
];

export default routes;
