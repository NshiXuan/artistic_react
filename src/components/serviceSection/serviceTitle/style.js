import styled from "styled-components";
import themeList from "../../../theme/themeList";

const ServiceTitleStyle = styled.h3`
  font-size: 4rem;
  font-weight: 800;
  color: ${props => props.theme.theme === themeList.light ? 'var(--darkBlue_2)' : 'var(--lightBlue_1)'};

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`

export default ServiceTitleStyle