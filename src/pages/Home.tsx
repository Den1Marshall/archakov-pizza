import Categories from '../components/Categories/Categories';
import MainTitle from '../components/HomeTitle/HomeTitle';
import Catalog from '../components/Catalog/Catalog';
import { FC } from 'react';

const Home: FC = () => {
  console.log('home render');

  return (
    <main>
      <Categories />
      <MainTitle />
      <Catalog />
    </main>
  );
};

export default Home;
