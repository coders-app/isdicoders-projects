import { ChallengeStructure } from "../../types";
import ChallengeCard from "../ChallengeCard/ChallengeCard";
import ChallengesListStyled from "./ChallengesListStyled";

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
    <ChallengesListStyled>
      {challengesPerWeek.map(({ weekName, challenges }) => (
        <li className="week" key={weekName}>
          <h3 className="week__name">{weekName}</h3>
          <ul className="challenges">
            {challenges.map((challenge) => (
              <li key={challenge.id}>
                <ChallengeCard challenge={challenge} />
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ChallengesListStyled>
  );
};

export default ChallengesList;
