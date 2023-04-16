import styles from './Catalog.module.css';
import { useState } from 'react';

import PizzaItem from './PizzaItem/PizzaItem';

import pizzas from '../../json/pizza.json';

const Catalog = () => {
  const sortByAll = () =>
    pizzas.map((pizza) => (
      <PizzaItem
        key={pizza.id}
        name={pizza.title}
        img={pizza.imageUrl}
        types={pizza.types}
        sizes={pizza.sizes}
        price={pizza.price}
      />
    ));

  // const sortByClosed = () =>
  // pizzas
  //   .filter((pizza) => pizza.closed)
  //   .map((pizza) => (
  //     <PizzaItem
  //       key={pizza.name}
  //       name={pizza.name}
  //       img={pizza.img}
  //       width={pizza.width}
  //       sizes={pizza.sizes}
  //       price={pizza.price}
  //     />
  //   ));

  const [renderedPizzas, setRenderedPizzas] = useState(sortByAll);

  return <main className={styles.catalog}>{renderedPizzas}</main>;
};

export default Catalog;
