import { Grid } from './styled';
import Header from '../header/Header';
import Aside from '../aside/Aside';
import Content from '../content/Content';

function Layout({ theme, setTheme }) {
  return (
    <Grid>
      <Header />
      <Aside theme={theme} setTheme={setTheme} />
      <Content />
    </Grid>
  );
}

export default Layout;
