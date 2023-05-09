import { RouteObject, Navigate } from "react-router-dom";
import App from "../components/App/App.tsx";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage.tsx";
import ChallengesPage from "../pages/ChallengesPage/ChallengesPage.tsx";
import appPaths from "../constants/appPaths.ts";
import ProjectsPage from "../pages/ProjectsPage/ProjectsPage.tsx";

const appRoutes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Navigate to={appPaths.challenges} replace /> },
      { path: appPaths.challenges, element: <ChallengesPage /> },
      { path: appPaths.projectsByChallengeId, element: <ProjectsPage /> },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
];

export default appRoutes;
