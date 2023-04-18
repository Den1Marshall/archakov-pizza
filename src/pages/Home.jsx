import { useState } from 'react';

import Categories from '../components/Categories/Categories';
import MainTitle from '../components/HomeTitle/HomeTitle';
import Catalog from '../components/Catalog/Catalog';

const Home = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [sortBy, setSortBy] = useState('популярности');

  console.log('home render');

  return (
    <main>
      <Categories
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <MainTitle />
      <Catalog sortBy={sortBy} setSortBy={setSortBy} />
    </main>
  );
};

export default Home;
