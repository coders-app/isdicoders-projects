import { vi } from "vitest";
import { renderHook } from "@testing-library/react";
import useChallengesApi from "./useChallengesApi";
import { ChallengesRepository } from "../repositories/types";
import { getChallengesMock } from "../mocks/challengesMocks";
import { projectsMock } from "../mocks/projectsMocks";

describe("Given a useChallengesApi hook", () => {
  describe("When it receives a challenges repository", () => {
    const challengesMock = getChallengesMock();

    const mockChallengesRepository: ChallengesRepository = {
      getChallenges: vi.fn().mockResolvedValue(challengesMock),
      getChallengeById: vi.fn().mockResolvedValue(challengesMock[0]),
      getProjectsByChallengeId: vi.fn().mockResolvedValue(projectsMock),
    };

    describe("And its function getChallenges is invoked", () => {
      test("Then it should return the expected list of challenges", async () => {
        const {
          result: {
            current: { getChallenges },
          },
        } = renderHook(() => useChallengesApi(mockChallengesRepository));

        const challenges = await getChallenges();

        expect(challenges).toStrictEqual(challengesMock);
      });
    });

    describe("And its function getChallengeById is invoked with '1'", () => {
      test("Then it should return the expected challenge", async () => {
        const challengeId = "1";
        const {
          result: {
            current: { getChallengeById },
          },
        } = renderHook(() => useChallengesApi(mockChallengesRepository));

        const challenge = await getChallengeById(challengeId);

        expect(challenge).toStrictEqual(challengesMock[0]);
      });
    });

    describe("And its function getProjectsByChallengeId is invoked with '1'", () => {
      test("Then it should return the expected list of projects", async () => {
        const challengeId = "1";
        const {
          result: {
            current: { getProjectsByChallengeId },
          },
        } = renderHook(() => useChallengesApi(mockChallengesRepository));

        const projects = await getProjectsByChallengeId(challengeId);

        expect(projects).toStrictEqual(projectsMock);
      });
    });
  });
});
