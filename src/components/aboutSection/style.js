import styled from "styled-components";

const AboutSectionStyle = styled.div`
  padding: 10rem 0;

  .about_wrapper{
    display: flex;
    align-items: center;
    justify-content: center;

    .about_subtitle{
      margin-bottom: 1rem;
      font-weight: 600;
      color: var(--mediumSlateBlue);
    }

    .about_title{
      margin-bottom: 2rem;
      max-width: 350px;
    }

    .about_desc{
      margin-bottom: 2rem;
      max-width: 300px;
    }
  }

  @media (max-width: 768px){
    .about_wrapper{
      flex-direction: column;
    }

    .about_img{
      max-width: 400px;
    }
  }
`

export default AboutSectionStyle