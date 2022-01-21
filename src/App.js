//import Header from './components/header/Header';
import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import mainTheme from './styles/themes/mainTheme';
import Layout from './components/layout/Layout';

function App() {
  return (
    <>
      <ThemeProvider theme={mainTheme}>
        <GlobalStyles />
        <Layout />
      </ThemeProvider>
    </>
  );
}

export default App;
