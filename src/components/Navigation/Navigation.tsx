import { Link } from "react-router-dom";
import NavigationStyled from "./NavigationStyled";
import appPaths from "../../constants/appPaths";

const Navigation = (): JSX.Element => {
  return (
    <NavigationStyled>
      <Link to={appPaths.challenges}>Challenges</Link>
    </NavigationStyled>
  );
};

export default Navigation;
