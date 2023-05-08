import { ChallengeStructure } from "../types";

export interface ChallengesRepository {
  getChallenges: () => Promise<ChallengeStructure[]>;
}
