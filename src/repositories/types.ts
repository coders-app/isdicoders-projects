import { ChallengeStructure, ProjectStructure } from "../types";

export interface ChallengesRepository {
  getChallenges: () => Promise<ChallengeStructure[]>;
  getChallengeById: (challengeId: string) => Promise<ChallengeStructure>;
  getProjectsByChallengeId: (
    challengeId: string
  ) => Promise<ProjectStructure[]>;
}
