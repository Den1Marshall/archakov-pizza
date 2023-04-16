import { Container } from '@mui/material';
import Header from './components/Header/Header';
import Categories from './components/Categories/Categories';
import MainTitle from './components/MainTitle/MainTitle';
import Catalog from './components/Catalog/Catalog';

const App = () => {
  return (
    <Container fixed>
      <Header />
      <Categories />
      <MainTitle />
      <Catalog />
    </Container>
  );
};

export default App;
