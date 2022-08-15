import styled from "styled-components";

const ThemeSwitcherStyle = styled.div`
  label{
    --gap: 4px;
    --size: 20px;
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 30px;
    width: 55px;
    background-color: var(--themeBgColor);
    border-radius: 50px;
    cursor: pointer;
    z-index: 1;

    .icon{
      height: var(--size);
      width: var(--size);
      display: flex;
      justify-content: center;
      align-items: center;
    }

    svg{
      width: 75%;
      color: var(--white);
    }
  }

  label::after{
    position: absolute;
    left: var(--gap);
    content: "";
    width: var(--size);
    height: var(--size);
    border-radius: 50%;
    background-color: var(--mediumSlateBlue);
    transition: 0.5s ease left;
    z-index: -1;
  }

  input{
  width: 0;
  height: 0;
  display: none;
  visibility: hidden;
  }

  input:checked + label::after{
    left: calc(100% - var(--gap) - var(--size));
  }
`
export default ThemeSwitcherStyle