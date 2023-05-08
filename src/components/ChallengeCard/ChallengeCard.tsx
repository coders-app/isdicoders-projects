import { Link } from "react-router-dom";
import { ChallengeStructure } from "../../types";
import appPaths from "../../constants/appPaths";

interface ChallengeCardProps {
  challenge: ChallengeStructure;
}

const ChallengeCard = ({ challenge }: ChallengeCardProps): JSX.Element => {
  return (
    <article>
      <Link to={`${appPaths.projects}/${challenge.id}`}>{challenge.name}</Link>
    </article>
  );
};

export default ChallengeCard;
