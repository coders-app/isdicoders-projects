import { RouterProvider } from "react-router-dom";
import { createTestRouter } from "../routers/routers";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import appTheme from "../styles/theme/appTheme";
import { Provider } from "react-redux";
import { PreloadedState } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { setupStore } from "../store";
import { store } from "../store";

export const renderSingleRoute = (
  ui: React.ReactElement,
  preloadedState?: PreloadedState<RootState>
) => {
  const testStore = preloadedState ? setupStore(preloadedState) : store;
  const testRouter = createTestRouter(ui);

  return {
    ...render(
      <Provider store={testStore}>
        <ThemeProvider theme={appTheme}>
          <RouterProvider router={testRouter} />
        </ThemeProvider>
      </Provider>
    ),
  };
};
