import { screen } from "@testing-library/react";
import ChallengesList from "./ChallengesList";
import { getChallengesMock } from "../../mocks/challengesMocks";
import { renderSingleRoute } from "../../testUtils/testUtils";

describe("Given a ChallengesList component", () => {
  const challengesMock = getChallengesMock();

  describe("When rendered", () => {
    test("Then it should show 9 weeks", () => {
      const expectedLength = 9;

      renderSingleRoute(<ChallengesList challenges={challengesMock} />);

      const weeksNames = screen.getAllByRole("heading", {
        level: 3,
      });

      expect(weeksNames).toHaveLength(expectedLength);
    });
  });

  describe("When it receives a list of challenges", () => {
    test("Then it should show links with challenges' names", () => {
      renderSingleRoute(<ChallengesList challenges={challengesMock} />);

      challengesMock.forEach((challenge) => {
        const link = screen.getByRole("link", {
          name: challenge.name,
        });

        expect(link).toBeInTheDocument();
      });
    });
  });
});
