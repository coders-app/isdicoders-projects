import { vi } from "vitest";
import { renderHook } from "@testing-library/react";
import useChallengesApi from "./useChallengesApi";
import { ChallengesRepository } from "../repositories/types";
import { getChallengesMock } from "../mocks/challengesMocks";

describe("Given a useChallengesApi hook", () => {
  describe("When it receives a challenges repository", () => {
    describe("And its function getChallenges is invoked", () => {
      test("Then it should return ", async () => {
        const challengesMock = getChallengesMock();

        const mockChallengesRepository: ChallengesRepository = {
          getChallenges: vi.fn().mockResolvedValue(challengesMock),
        };

        const {
          result: {
            current: { getChallenges },
          },
        } = renderHook(() => useChallengesApi(mockChallengesRepository));

        const challenges = await getChallenges();

        expect(challenges).toStrictEqual(challengesMock);
      });
    });
  });
});
