import { createBrowserRouter, createMemoryRouter } from "react-router-dom";
import appRoutes from "./routes";

const appRouter = createBrowserRouter(appRoutes);

export const createTestRouter = (ui: React.ReactElement) =>
  createMemoryRouter([
    {
      path: "/",
      element: ui,
    },
  ]);

export default appRouter;
