import { RouterProvider } from "react-router-dom";
import { createTestRouter } from "../routers/routers";
import { render } from "@testing-library/react";

export const renderSingleRoute = (ui: React.ReactElement) => {
  const testRouter = createTestRouter(ui);

  return { ...render(<RouterProvider router={testRouter} />) };
};
