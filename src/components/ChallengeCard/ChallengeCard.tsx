import { Link } from "react-router-dom";
import { ChallengeStructure } from "../../types";
import appPaths from "../../constants/appPaths";
import ChallengeCardStyled from "./ChallengeCardStyled";

interface ChallengeCardProps {
  challenge: ChallengeStructure;
}

const ChallengeCard = ({ challenge }: ChallengeCardProps): JSX.Element => {
  return (
    <ChallengeCardStyled>
      <Link to={`${appPaths.projects}/${challenge.id}`}>
        {challenge.number}
      </Link>
    </ChallengeCardStyled>
  );
};

export default ChallengeCard;
