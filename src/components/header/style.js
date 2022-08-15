import styled from "styled-components";
import themeList from "../../theme/themeList";

const HeaderStyle = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--header-height);
  /* background-color: var(--lightBlue_1); */
  background-color: ${props => props.theme.theme === themeList.light ? 'var(--lightBlue_1)' : 'var(--darkBlue_3)'};
  border-bottom: 1px solid var(--mediumSlateBlue);
  z-index: 999;

  .navigation{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;
  }

  .navMenu{
    display: flex;
    align-items: center;

    nav ul{
      display: flex;
      align-items: center;
      font-size: 1.6rem;
      font-weight: 500;
      color: var(--fontColor);
      /* color: ${props => props.theme.theme === themeList.light ? 'var(--fontColor)' : 'var(--lightBlue_1)'}; */

      li{
        padding: 0.5rem 1rem;

        &:hover{
          text-decoration: underline;
        }
      }
    }
  }

  .menuIcon{
    display: none;
  }

  @media (max-width: 768px) {
    .navMenu{
      nav{
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: fixed;
        width: 90%;
        max-width: 250px;
        top: 0;
        right: 0;
        background-color: var(--lightBlue_2);
        height: 100vh;
        transform: translateX(100%);
        transition: .3s ease transform;
        overflow: hidden;
        z-index: 999;
      }
      
      nav.open{
        transform: translateX(0);
      }

      nav ul{
        display: block;
        text-align: right;
        width: 100%;
        font-size: 1.6rem;

        li{
          margin: 2rem 0;
        }
      }

      .menuIcon,.closeIcon{
        display: block;
        width: 30px;
        height: 30px;
        margin-left: 10px;
        padding: 3px;
        color: var(--fontColor);
        border-radius: 5px;
        cursor: pointer;

        &:hover{
          background-color: var(--themeBgColor);
        }
      }

      .closeIcon{
        position: absolute;
        top: 5px;
        left: -5px;
        cursor: pointer;
      }
    }

  }
`

export default HeaderStyle