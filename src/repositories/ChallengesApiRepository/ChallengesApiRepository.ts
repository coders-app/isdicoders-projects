import axios from "axios";
import { ChallengeStructure, ProjectStructure } from "../../types";
import { ChallengesRepository } from "../types";
import apiEndpoints from "../../constants/apiEndpoints";

class ChallengesApiRepository implements ChallengesRepository {
  async getChallenges(): Promise<ChallengeStructure[]> {
    const { data } = await axios.get<{ challenges: ChallengeStructure[] }>(
      apiEndpoints.getChallenges
    );

    return data.challenges;
  }

  async getChallengeById(challengeId: string): Promise<ChallengeStructure> {
    const { data } = await axios.get<{ challenge: ChallengeStructure }>(
      apiEndpoints.getChallengeById(challengeId)
    );

    return data.challenge;
  }

  async getProjectsByChallengeId(
    challengeId: string
  ): Promise<ProjectStructure[]> {
    const { data } = await axios.get<{ projects: ProjectStructure[] }>(
      apiEndpoints.getProjectsByChallengeId(challengeId)
    );

    return data.projects;
  }
}

export default ChallengesApiRepository;
