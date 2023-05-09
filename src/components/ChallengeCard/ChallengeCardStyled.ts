import { styled } from "styled-components";

const ChallengeCardStyled = styled.article`
  width: 30px;
  aspect-ratio: 1;
  background-color: #fff;
  a {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;

    &:hover {
      color: #fff;
      background-color: ${(props) => props.theme.colors.primary};
    }
  }
`;

export default ChallengeCardStyled;
