import axios from "axios";
import { ChallengeStructure } from "../../types";
import { ChallengesRepository } from "../types";
import apiEndpoints from "../../constants/apiEndpoints";

class ChallengesApiRepository implements ChallengesRepository {
  async getChallenges(): Promise<ChallengeStructure[]> {
    const { data } = await axios.get<{ challenges: ChallengeStructure[] }>(
      apiEndpoints.getChallenges
    );

    return data.challenges;
  }
}

export default ChallengesApiRepository;
