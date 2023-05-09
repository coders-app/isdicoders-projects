import { Outlet } from "react-router-dom";
import ContainerStyled from "../shared/ContainerStyled/ContainerStyled";

const Layout = (): JSX.Element => {
  return (
    <ContainerStyled>
      <Outlet />
    </ContainerStyled>
  );
};

export default Layout;
