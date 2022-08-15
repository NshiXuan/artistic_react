import styled from "styled-components";
import themeList from "../../../theme/themeList";

const HeroTitleStyle = styled.h1`
  font-size: 6rem;
  color: ${props => props.theme.theme === themeList.light ? 'var(--darkBlue_2)' : 'var(--lightBlue_1)'};
  font-weight: 900;
  text-transform: capitalize;

  @media (max-width: 768px) {
    font-size: 4rem;
  }
`

export default HeroTitleStyle