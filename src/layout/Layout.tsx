import { Container, ThemeProvider } from '@mui/material';
import Header from '../components/Header/Header';
import { Outlet } from 'react-router-dom';
import SearchContextProvider from '../context/SearchContext';
import theme from '../utils/theme';
import { FC } from 'react';

const Layout: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container fixed>
        <SearchContextProvider>
          <Header />
          <Outlet />
        </SearchContextProvider>
      </Container>
    </ThemeProvider>
  );
};

export default Layout;
