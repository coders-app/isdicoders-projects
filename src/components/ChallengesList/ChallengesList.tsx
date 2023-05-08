import { ChallengeStructure } from "../../types";
import ChallengeCard from "../ChallengeCard/ChallengeCard";

interface ChallengesListProps {
  challenges: ChallengeStructure[];
}

const ChallengesList = ({ challenges }: ChallengesListProps): JSX.Element => {
  const totalWeeks = 9;

  const challengesPerWeek = Array(totalWeeks)
    .fill("")
    .map((_, position) => {
      const weekNumber = position + 1;

      return {
        weekName: `week${weekNumber}`,
        challenges: challenges.filter(
          (challenge) => challenge.week === weekNumber
        ),
      };
    });

  return (
    <ul>
      {challengesPerWeek.map(({ weekName, challenges }) => (
        <li key={weekName}>
          <h3>{weekName}</h3>
          <ul>
            {challenges.map((challenge) => (
              <li key={challenge.id}>
                <ChallengeCard challenge={challenge} />
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default ChallengesList;
