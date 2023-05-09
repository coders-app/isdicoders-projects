import Header from "./Header";
import { renderSingleRoute } from "../../testUtils/testUtils";
import { screen } from "@testing-library/react";

describe("Given a Header component", () => {
  describe("When rendered", () => {
    test("Then it should the title 'ISDI Coders Projects' inside a level 1 heading", () => {
      const expectedTitle = /isdi coders projects/i;

      renderSingleRoute(<Header />);

      const appTitle = screen.getByRole("heading", {
        level: 1,
        name: expectedTitle,
      });

      expect(appTitle).toBeInTheDocument();
    });
  });
});
