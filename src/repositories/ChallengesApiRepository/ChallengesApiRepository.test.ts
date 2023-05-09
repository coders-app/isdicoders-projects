import { challengesMock } from "../../mocks/challengesMocks";
import { projectsMock } from "../../mocks/projectsMocks";
import ChallengesApiRepository from "./ChallengesApiRepository";

describe("Given a ChallengesApiRepository instance", () => {
  const challengesApiRepository = new ChallengesApiRepository();

  describe("When its method getChallenge is invoked", () => {
    test("Then it should return expected list of challenges", async () => {
      const challenges = await challengesApiRepository.getChallenges();

      expect(challenges).toStrictEqual(challengesMock);
    });
  });

  describe("When its method getChallengeById is invoked with id '1'", () => {
    test("Then it should return expected challenge", async () => {
      const challengeId = "1";

      const challenge = await challengesApiRepository.getChallengeById(
        challengeId
      );

      expect(challenge).toStrictEqual(challengesMock[0]);
    });
  });

  describe("When its method getProjectsByChallengeId is invoked with id '1'", () => {
    test("Then it should return expected list of projects", async () => {
      const challengeId = "1";

      const projects = await challengesApiRepository.getProjectsByChallengeId(
        challengeId
      );

      expect(projects).toStrictEqual(projectsMock);
    });
  });
});
