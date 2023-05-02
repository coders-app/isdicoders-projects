import { Outlet } from "react-router-dom";
import ContainerStyled from "./ContainerStyled";
import MainStyled from "./MainStyled";

const Layout = (): JSX.Element => {
  return (
    <ContainerStyled>
      <MainStyled>Hello World!</MainStyled>
      <Outlet />
    </ContainerStyled>
  );
};

export default Layout;
