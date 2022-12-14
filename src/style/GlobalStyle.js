import { createGlobalStyle } from 'styled-components';

// Typography
import '@fontsource/poppins';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';
import themeList from '../theme/themeList';

const GlobalStyles = createGlobalStyle`
:root{
  /* colors */
  --darkBlue_1: #3B447A;
  --darkBlue_2: #222B5F;
  --darkBlue_3: #0A0F19;
  --darkBlue_4: #101826;
  --mediumSlateBlue: #6C62E2;
  --lightBlue_1: #F3F1FE;
  --lightBlue_2: #ADBDE3;
  --white: #FFFFFF;
  --black: #000000;
  --fontColor: #6C62E2;
  --themeBgColor: #cfc8f4;

  /* others */
    --header-height: 50px;
}

html{
  font-size: 10px;
}

body{
  background-color: ${props => props.theme.theme === themeList.light ? 'var(--lightBlue_1)' : 'var(--darkBlue_3)'};
  font-family: 'Poppins', sans-serif;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

a{
  text-decoration: none;
  cursor: pointer;
}

ul, li{
  list-style: none;
}

.container{
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
}

img, svg{
  width: 100%;
  height: 100%;
}

.button:hover{
  transform: translate(0,-1px);
  cursor: pointer;
}
`;

export default GlobalStyles;
