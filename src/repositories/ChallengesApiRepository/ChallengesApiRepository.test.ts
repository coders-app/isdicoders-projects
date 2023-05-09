import { challengesMock } from "../../mocks/challengesMocks";
import ChallengesApiRepository from "./ChallengesApiRepository";

describe("Given a ChallengesApiRepository instance", () => {
  describe("When its method getChallenge is invoked", () => {
    test("Then it should return expected list of challenges", async () => {
      const challengesApiRepository = new ChallengesApiRepository();

      const challenges = await challengesApiRepository.getChallenges();

      expect(challenges).toStrictEqual(challengesMock);
    });
  });
});
