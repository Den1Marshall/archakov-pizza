import { Container } from '@mui/material';
import Header from '../components/Header/Header';
import { Outlet } from 'react-router-dom';
import SearchContextProvider from '../context/SearchContext';

const Layout = () => {
  return (
    <Container fixed>
      <SearchContextProvider>
        <Header />
        <Outlet />
      </SearchContextProvider>
    </Container>
  );
};

export default Layout;
