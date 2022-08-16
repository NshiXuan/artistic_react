import styled from "styled-components";

const NewsletterSectionStyle = styled.div`
  padding: 10rem 0;
  text-align: center;   

  .newsletter_wrapper{
    max-width: 500px;
    background-color: var(--mediumSlateBlue);
    margin: 0 auto;
    padding: 3rem;
    border-radius: 12px;

    .newsletter_title{
      margin-bottom: 1rem;
    }

    .newsletter_subtitle{
      color: var(--lightBlue_1);
      margin-bottom: 1rem;
    }

    .newsletter_form{
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;

      input{
        max-width: 300px;
        width: 100%;
        height: 40px;
        font-size: 1.6rem;
        padding-left: 1rem;
        border-radius: 4px;
        border: none;
        background-color: var(--lightBlue_1);
      }

      button{
        height: 40px;
        color: var(--mediumSlateBlue);
        font-size: 1.6rem;
        padding: 0 1.5rem;
        border-radius: 4px;
        border: none;
      }
    }

    @media (max-width: 768px) {
      .newsletter_form{
        flex-direction: column;

        input {
          font-size: 1.4rem;
        }
        button {
          font-size: 1.4rem;
        }
      }
    }
  }
`

export default NewsletterSectionStyle