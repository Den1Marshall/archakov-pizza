import styles from './Catalog.module.css';
import { useEffect, useState } from 'react';

import PizzaItem from './PizzaItem/PizzaItem';
import { Skeleton } from './PizzaItem/Skeleton';

const Catalog = ({ activeCategory, sortBy }) => {
  const [renderedPizzas, setRenderedPizzas] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getPizzas = async () => {
    setIsLoading(true);
    const response = await fetch(
      `https://63e9515f4f3c6aa6e7cb79a8.mockapi.io/api/v1/pizzas?category=${
        activeCategory ? activeCategory : ''
      }&sortby=${sortBy.value}`
    );

    const pizzas = await response.json();

    return pizzas;
  };

  const renderPizzas = async () => {
    const pizzas = await getPizzas();

    setRenderedPizzas(
      pizzas.map((pizza) => (
        <PizzaItem
          key={pizza.id}
          name={pizza.title}
          img={pizza.imageUrl}
          types={pizza.types}
          sizes={pizza.sizes}
          price={pizza.price}
        />
      ))
    );

    setIsLoading(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    renderPizzas();
  }, [activeCategory, sortBy]);

  console.log('catalog render');

  return (
    <main className={styles.catalog}>
      {isLoading
        ? [...new Array(10)].map((value, index) => <Skeleton key={index} />)
        : renderedPizzas}
    </main>
  );
};

export default Catalog;
