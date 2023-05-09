import Navigation from "./Navigation";
import { renderSingleRoute } from "../../testUtils/testUtils";
import { screen } from "@testing-library/react";

describe("Given a Navigation component", () => {
  describe("When rendered", () => {
    test("Then it should show a link 'Challenges'", () => {
      const expectedLinkText = "Challenges";

      renderSingleRoute(<Navigation />);

      const challengesLink = screen.getByRole("link", {
        name: expectedLinkText,
      });

      expect(challengesLink).toBeInTheDocument();
    });
  });
});
