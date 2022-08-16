import styled from "styled-components";
import themeList from "../../../theme/themeList";

const FormFiledStyle = styled.div`

  label{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    font-size: 1.6rem;
    color: ${props => props.theme.theme === themeList.light ? 'var(--darkBlue_2)' : 'var(--lightBlue_2)'};

    input,textarea{
      margin-top: 1rem;
      width: 100%;
      height: 40px;
      background-color: var(--lightBlue_2);
      border-radius: 4px;
      padding: 1rem;
      border: none;
    }

    textarea {
      height: auto;
      resize: vertical;
    }
  }
`

export default FormFiledStyle