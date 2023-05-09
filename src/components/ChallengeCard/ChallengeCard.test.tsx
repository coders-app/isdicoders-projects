import { screen } from "@testing-library/react";
import ChallengeCard from "./ChallengeCard";
import { getChallengeMock } from "../../mocks/challengesMocks";
import { renderSingleRoute } from "../../testUtils/testUtils";

describe("Given a ChallengeCard component", () => {
  describe("When it receives a challenge", () => {
    test("Then it should show a link with the challenge's name", () => {
      const challengeMock = getChallengeMock();

      renderSingleRoute(<ChallengeCard challenge={challengeMock} />);

      const challengeLink = screen.getByRole("link", {
        name: challengeMock.number,
      });

      expect(challengeLink).toBeInTheDocument();
    });
  });
});
