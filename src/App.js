//import Header from './components/header/Header';
import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import mainTheme from './styles/themes/mainTheme';
import darkTheme from './styles/themes/darkTheme';
import { useEffect, useState } from 'react';
import Layout from './components/layout/Layout';

function App() {
  const [theme, setTheme] = useState(mainTheme);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Layout theme={theme} setTheme={setTheme} />
      </ThemeProvider>
    </>
  );
}

export default App;
