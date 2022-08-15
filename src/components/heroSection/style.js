import styled from "styled-components";

const HeroSectionStyle = styled.div`
  min-height: 100vh;
  margin-top: calc(var(--header-height));
  display: flex;
  justify-content: center;
  align-items: center;

  .hero-wrapper{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 1rem;

    .hero-info{
      flex: 3;

      .hero-title{
        margin-bottom: 1.5rem;
        max-width: 400px;
      }

      .hero-desc{
        margin-bottom: 1.5rem;
        max-width: 300px;
      }
    }

    .hero-img{
      flex: 4;
    }
  }

  @media (max-width: 768px) {
    .hero-wrapper{
      flex-direction: column-reverse;
      gap: 0.5rem;

      .hero-img,.hero-desc{
        max-width: 400px !important;
      }
    }
  }
`

export default HeroSectionStyle