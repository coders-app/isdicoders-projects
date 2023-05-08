import { RouteObject } from "react-router-dom";
import App from "../components/App/App.tsx";

const appRouter: RouteObject[] = [
  {
    path: "/",
    element: <App />,
  },
];

export default appRouter;
