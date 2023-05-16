import styles from './Catalog.module.css';
import { FC, useContext, useEffect, useState } from 'react';

import PizzaItem from '../PizzaItem/PizzaItem';
import { Skeleton } from '../Skeleton/Skeleton';
import { SearchContext } from '../../context/SearchContext';
import { Pagination } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

export interface IPizza {
  category: number;
  id: number;
  imageUrl: string;
  price: number;
  rating: number;
  sizes: number[];
  title: string;
  types: number[];
}

const Catalog: FC = () => {
  const categoryID = useSelector(
    (state: RootState) => state.filterSlicePersistedReducer.categoryID
  );
  const sortBy = useSelector(
    (state: RootState) => state.filterSlicePersistedReducer.sort
  );

  const { inputValue } = useContext(SearchContext);
  const [renderedPizzas, setRenderedPizzas] = useState(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [currentPage, setCurrentPage] = useState<number>(1);

  const category = `&category=${categoryID ? categoryID : ''}`;
  const sort = sortBy ? `&sortBy=${sortBy.value}` : '';
  // const search = `&title=${inputValue ? inputValue : ''}`;
  const pagination = `&page=${currentPage}&limit=4`;

  const getPizzas = async () => {
    setIsLoading(true);
    const response = await fetch(
      `https://63e9515f4f3c6aa6e7cb79a8.mockapi.io/api/v1/pizzas?${sort}${category}${pagination}`
    );

    const pizzas = await response.json();

    return pizzas;
  };

  const renderPizzas = async () => {
    const pizzas = await getPizzas();

    setRenderedPizzas(
      pizzas.map((pizza: IPizza) => (
        <PizzaItem
          key={pizza.id}
          name={pizza.title}
          img={pizza.imageUrl}
          types={pizza.types}
          sizes={pizza.sizes}
          price={pizza.price}
          id={pizza.id}
        />
      ))
    );

    setIsLoading(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    renderPizzas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryID, sortBy, inputValue, currentPage]);

  const skeleton = [...new Array(10)].map((value, index) => (
    <Skeleton key={index} />
  ));

  return (
    <main className={styles.catalog}>
      <div className={styles.wrapper}>
        {isLoading ? skeleton : renderedPizzas}
      </div>
      <Pagination
        variant='outlined'
        size='large'
        count={categoryID === 0 ? 3 : 1}
        page={currentPage}
        onChange={(e, value) => setCurrentPage(value)}
      />
    </main>
  );
};

export default Catalog;
