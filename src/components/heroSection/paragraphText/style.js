import styled from "styled-components";
import themeList from "../../../theme/themeList";

const ParagraphTextStyle = styled.div`
  font-size: 1.6rem;
  line-height: 1.4em;
  color: ${props => props.theme.theme === themeList.light ? 'var(--darkBlue_1)' : 'var(--lightBlue_2)'};

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`

export default ParagraphTextStyle