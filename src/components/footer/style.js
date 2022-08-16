import styled from "styled-components";

const FooterStyle = styled.div`
  background-color: var(--darkBlue_4);
  padding: 10rem 0;

  .footer_wrapper{
    text-align: center;

    .footer_logo{
      max-width: 120px;
      margin: 0 auto;
      margin-bottom: 1rem;
    }

    .footer_desc {
      color: var(--white);
      max-width: 350px;
      margin: 0 auto;
      margin-bottom: 2rem;
    }

    .footer_links{
      color: var(--lightBlue_1);
      margin-bottom: 2rem;
      
      a{
        font-size: 1.6rem;
        line-height: 1.5em;
        margin: 0 1rem;

        &:hover{
          color: var(--mediumSlateBlue);
          text-decoration: underline;
        }
      }
    }

    .footer__copyright {
      font-size: 1.2rem;
      color: var(--lightBlue_1);
    }
  }

  @media (max-width: 768px) {
    .footer_links {
      a {
        font-size: 1.4rem!important;
      }
    }
  }
`

export default FooterStyle