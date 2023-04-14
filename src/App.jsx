import { Container } from '@mui/material';
import Header from './components/Header/Header';

const App = () => {
  return (
    <Container
      sx={{
        backgroundColor: '#fff',
        margin: '50px auto',
        borderRadius: '10px',
      }}
    >
      <Header />
    </Container>
  );
};

export default App;
