import styles from './Catalog.module.css';
import { useEffect, useState } from 'react';

import PizzaItem from './PizzaItem/PizzaItem';
import { Skeleton } from './PizzaItem/Skeleton';

const Catalog = () => {
  const [renderedPizzas, setRenderedPizzas] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getPizzas = async () => {
    const response = await fetch(
      'https://63e9515f4f3c6aa6e7cb79a8.mockapi.io/api/v1/pizzas'
    );

    const pizzas = await response.json();

    return pizzas;
  };

  const sortByRating = async () => {
    const pizzasCopy = await getPizzas();

    pizzasCopy.sort((a, b) => b.rating - a.rating);

    setRenderedPizzas(
      pizzasCopy.map((pizza) => (
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
    sortByRating();
  }, []);

  return (
    <main className={styles.catalog}>
      {isLoading
        ? [...new Array(10)].map((value, index) => <Skeleton key={index} />)
        : renderedPizzas}
    </main>
  );
};

export default Catalog;
