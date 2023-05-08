import { useCallback } from "react";
import { ChallengesRepository } from "../repositories/types";
import { ChallengeStructure } from "../types";

const useChallengesApi = (challengesRepository: ChallengesRepository) => {
  const getChallenges = useCallback(async (): Promise<ChallengeStructure[]> => {
    const challenges = await challengesRepository.getChallenges();

    return challenges;
  }, [challengesRepository]);

  return { getChallenges };
};

export default useChallengesApi;
