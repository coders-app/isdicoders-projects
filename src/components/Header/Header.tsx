import Navigation from "../Navigation/Navigation";
import ContainerStyled from "../shared/ContainerStyled/ContainerStyled";
import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  return (
    <HeaderStyled>
      <ContainerStyled className="container">
        <h1 className="app-title">ISDI Coders Projects</h1>
        <Navigation />
      </ContainerStyled>
    </HeaderStyled>
  );
};

export default Header;
