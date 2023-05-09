import { render, screen } from "@testing-library/react";
import ChallengeCard from "./ChallengeCard";
import { getChallengeMock } from "../../mocks/challengesMocks";
import { Provider } from "react-redux";
import { store } from "../../store";
import { RouterProvider } from "react-router-dom";
import { createTestRouter } from "../../routers/routers";

describe("Given a ChallengeCard component", () => {
  describe("When it receives a challenge", () => {
    test("Then it should show a link with the challenge's name", () => {
      const challengeMock = getChallengeMock();

      const testRouter = createTestRouter(
        <ChallengeCard challenge={challengeMock} />
      );

      render(
        <Provider store={store}>
          <RouterProvider router={testRouter} />
        </Provider>
      );

      const challengeLink = screen.getByRole("link", {
        name: challengeMock.name,
      });

      expect(challengeLink).toBeInTheDocument();
    });
  });
});
