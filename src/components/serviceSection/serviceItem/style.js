import styled from "styled-components";
import themeList from "../../../theme/themeList";

const ServiceItemStyle = styled.div`
  text-align: left;
  padding: 3rem;
  border-radius: 12px;

  .service-icon{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: var(--mediumSlateBlue);
    border-radius: 50%;
    color: var(--white);
    margin-bottom: 1rem;

    svg {
      width: 60%;
    }
  }

  .service-title{
    font-size: 2rem;
    font-weight: 500;
    line-height: 1.5em;
    color: ${props => props.theme.theme === themeList.light ? 'var(--darkBlue_2)' : 'var(--lightBlue_1)'};
    margin-bottom: 1rem;
  }

  &:hover{
    background-color: var(--mediumSlateBlue);
    cursor: pointer;

    .service-icon {
      background-color: var(--white);
      color: var(--mediumSlateBlue);
    }

    .service-title {
      color: var(--lightBlue_1);
    }

    .service-desc {
      color: var(--lightBlue_1);
    }
  }
`

export default ServiceItemStyle