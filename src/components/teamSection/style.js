import styled from "styled-components";

const TeamSectionStyle = styled.div`
  padding: 10rem 0;
  text-align: center;

  .team_title{
    margin-bottom: 1rem;
  }

  .team_subtitle{
    color: var(--mediumSlateBlue);
    margin-bottom: 2rem;
  }

  .team_members{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5rem;
  }

  @media (max-width: 768px) {
    .team_members{
      gap: 2rem;
    }
  }
`
export default TeamSectionStyle