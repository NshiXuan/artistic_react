import styled from "styled-components";

const ServiceSectionStyle = styled.div`
  padding: 10rem 0;
  text-align: center;

  .service-title{
    margin-bottom: 3rem;
  }

  .service-item{
    display: flex;
    gap: 2rem;
  }

  @media (max-width: 768px) {
    .service-item{
      flex-direction: column;
      max-width: 300px;
      margin: 0 auto;
    }
  }
`

export default ServiceSectionStyle