import { Container } from '@mui/material';
import Header from '../components/Header/Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <Container fixed>
      <Header />
      <Outlet />
    </Container>
  );
};

export default Layout;
