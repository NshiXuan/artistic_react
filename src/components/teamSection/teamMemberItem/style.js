import styled from "styled-components";
import themeList from "../../../theme/themeList";

const TeamMemberItemStyle = styled.div`
  .team_member_img{
    margin-bottom: 1rem;
    
    img{
      border-radius: 18px;
    }
  }

  .member_name{
      color: ${props => props.theme.theme === themeList.light ? 'var(--darkBlue_2)' : 'var(--lightBlue_1)'};
    font-weight: 500;
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }

  .member_title{
    font-size: 1.4rem;
  }

  @media (max-width: 640px) {
    .member_name{
      font-size: 1rem;
    }

    .member_title{
      font-size: 0.2rem;
    }
  }
`

export default TeamMemberItemStyle