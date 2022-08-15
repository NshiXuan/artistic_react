import styled from "styled-components";
import themeList from "../../../theme/themeList";

const ServiceItemStyle = styled.div`
  text-align: left;
  padding: 3rem;
  border-radius: 12px;
  background-color: var(--mediumSlateBlue);

  .service-icon{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: var(--white);
    border-radius: 50%;
    color: var(--mediumSlateBlue);
    margin-bottom: 1rem;

    svg {
      width: 60%;
    }
  }

  .service-title{
    font-size: 2rem;
    font-weight: 500;
    line-height: 1.5em;
    color: var(--lightBlue_1);
    margin-bottom: 1rem!important;
  }

  &:hover{
    background-color: var(--mediumSlateBlue);
    cursor: pointer;

    .service-desc {
      color: var(--lightBlue_1);
    }
  }
`

export default ServiceItemStyle