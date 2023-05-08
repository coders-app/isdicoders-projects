import { ChallengeStructure } from "../../types";
import {
  challengesReducer,
  loadChallengesActionCreator,
} from "./challengesSlice";
import { ChallengesStateStructure } from "./types";

describe("Given a challengesReducer reducer", () => {
  describe("When it receives an empty challenges state and a load challenges action with two challenges", () => {
    test("Then it should return a state with the two challenges", () => {
      const currentChallengesState: ChallengesStateStructure = {
        challenges: [],
      };
      const newChallenges: ChallengeStructure[] = [
        {
          id: "1",
          name: "w1ch1",
          week: 1,
          number: "1",
        },
        {
          id: "2",
          name: "w1ch2",
          week: 1,
          number: "2",
        },
      ];
      const loadChallengesAction = loadChallengesActionCreator(newChallenges);

      const expectedNewChallengesState: ChallengesStateStructure = {
        challenges: [...newChallenges],
      };

      const newChallengesState = challengesReducer(
        currentChallengesState,
        loadChallengesAction
      );

      expect(newChallengesState).toStrictEqual(expectedNewChallengesState);
    });
  });
});
