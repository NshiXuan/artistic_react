import React, { memo, useContext } from 'react'
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './style/GlobalStyle'
import LandingPage from './pages/LandingPage'
import ThemeContext from './context/themeContext';

const App = memo(() => {
  const { theme } = useContext(ThemeContext)

  return (
    <>
      <ThemeProvider theme={{ theme }}>
        <GlobalStyles />
        <LandingPage />
      </ThemeProvider>
    </>
  )
})

export default App