import styled from "styled-components";

const ContactSectionStyle = styled.div`
  padding: 10rem 0;

   .contact_wrapper {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;

    .contact_info{
      margin-bottom: 3rem;

      .contact_title{
        margin-bottom: 1rem;
      }
    }
    
    .contact_form{
      display: grid;
      grid-template-columns: 1fr 1fr;
      /* gap: 3rem; */
      column-gap: 1.5rem;
      row-gap: 3rem;

      .contact_field_fullWidth{
        grid-column: span 2;
      }

      .contact_submit{
        width: max-content;
      }
    }
  }

  @media (max-width: 567px) {
    .contact_wrapper{
      .contact_form{
        grid-template-columns: 1fr;
        row-gap: 2rem;

        .contact_field_fullWidth{
          grid-column: span 1;
        }
      }
    }
  }
`

export default ContactSectionStyle