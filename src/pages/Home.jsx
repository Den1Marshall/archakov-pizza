import Categories from '../components/Categories/Categories';
import MainTitle from '../components/HomeTitle/HomeTitle';
import Catalog from '../components/Catalog/Catalog';

const Home = () => {
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
