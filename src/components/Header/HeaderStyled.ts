import { styled } from "styled-components";
import { horizontalFlex } from "../../styles/utils";

const HeaderStyled = styled.header`
  background-color: ${(props) => props.theme.colors.primary};
  height: 60px;
  color: #fff;

  .container {
    ${horizontalFlex}
    height: 100%;
  }

  .app-title {
    margin: 0;
  }
`;

export default HeaderStyled;
