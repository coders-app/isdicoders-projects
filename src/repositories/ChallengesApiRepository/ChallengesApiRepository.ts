import axios from "axios";
import { ChallengeStructure } from "../../types";
import { ChallengesRepository } from "../types";

class ChallengesApiRepository implements ChallengesRepository {
  private apiUrl = import.meta.env.VITE_API_URL;

  async getChallenges(): Promise<ChallengeStructure[]> {
    const { data } = await axios.get<{ challenges: ChallengeStructure[] }>(
      `${this.apiUrl}challenges`
    );

    return data.challenges;
  }
}

export default ChallengesApiRepository;
