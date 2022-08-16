import styled from "styled-components";

const PrimaryButtonStyle = styled.div`
  display: inline-block;
  background: var(--mediumSlateBlue);
  padding: 1.5rem 2rem;
  color: var(--white);
  font-size: 1.6rem;
  border-radius: 8px;
  font-weight: 500;
  border: none;

  @media (max-width: 768px) {
    font-size: 1.4rem;
    padding: 1.2rem 1.5rem;
  }
`

export default PrimaryButtonStyle 