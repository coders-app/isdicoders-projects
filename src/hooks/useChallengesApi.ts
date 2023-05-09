import { useCallback } from "react";
import { ChallengesRepository } from "../repositories/types";
import { ChallengeStructure, ProjectStructure } from "../types";

const useChallengesApi = (challengesRepository: ChallengesRepository) => {
  const getChallenges = useCallback(async (): Promise<ChallengeStructure[]> => {
    const challenges = await challengesRepository.getChallenges();

    return challenges;
  }, [challengesRepository]);

  const getChallengeById = useCallback(
    async (challengeId: string): Promise<ChallengeStructure> => {
      const challenge = await challengesRepository.getChallengeById(
        challengeId
      );

      return challenge;
    },
    [challengesRepository]
  );

  const getProjectsByChallengeId = useCallback(
    async (challengeId: string): Promise<ProjectStructure[]> => {
      const projects = await challengesRepository.getProjectsByChallengeId(
        challengeId
      );

      return projects;
    },
    [challengesRepository]
  );

  return { getChallenges, getChallengeById, getProjectsByChallengeId };
};

export default useChallengesApi;
