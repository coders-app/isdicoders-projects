import { Outlet } from "react-router-dom";
import ContainerStyled from "../shared/ContainerStyled/ContainerStyled";
import Header from "../Header/Header";

const Layout = (): JSX.Element => {
  return (
    <>
      <Header />
      <ContainerStyled>
        <Outlet />
      </ContainerStyled>
    </>
  );
};

export default Layout;
