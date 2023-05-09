import { styled } from "styled-components";

const ChallengesListStyled = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 10px;

  @media (min-width: 460px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 720px) {
    grid-template-columns: repeat(3, 1fr);
  }

  .week {
    background-color: #eee;
    padding: 10px;

    &__name {
      text-align: center;
    }

    .challenges {
      display: flex;
      gap: 10px;
    }
  }
`;

export default ChallengesListStyled;
