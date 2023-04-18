import { useState } from 'react';

import Categories from '../components/Categories/Categories';
import MainTitle from '../components/HomeTitle/HomeTitle';
import Catalog from '../components/Catalog/Catalog';

const Home = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [sortBy, setSortBy] = useState({
    name: 'Популярности (DESC)',
    value: 'rating&order=desc',
  });

  console.log('home render');

  return (
    <main>
      <Categories
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <MainTitle />
      <Catalog sortBy={sortBy} activeCategory={activeCategory} />
    </main>
  );
};

export default Home;
