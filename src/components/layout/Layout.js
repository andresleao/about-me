import { Grid } from './styled';
import Header from '../header/Header';
import Aside from '../aside/Aside';
import Content from '../content/Content';

function Layout() {
  return (
    <Grid>
      <Header />
      <Aside />
      <Content />
    </Grid>
  );
}

export default Layout;
