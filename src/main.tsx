import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle.ts";
import { appRouter } from "./routers/routers.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
