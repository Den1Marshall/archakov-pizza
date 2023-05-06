import { useEffect, useState } from 'react';
import styles from './FullPizza.module.css';

import { useNavigate, useParams } from 'react-router-dom';
import { Fade } from '@mui/material';

const FullPizza = () => {
  const { id } = useParams();

  interface IPizza {
    imageUrl: string;
    title: string;
    price: number;
  }

  const defaultPizza: IPizza = {
    imageUrl: '',
    title: '',
    price: 0,
  };

  const navigate = useNavigate();

  const [currentPizza, setCurrentPizza] = useState(defaultPizza);

  useEffect(() => {
    fetch(`https://63e9515f4f3c6aa6e7cb79a8.mockapi.io/api/v1/pizzas?id=${id}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          alert('Ошибка при получении пиццы');
          navigate('/');
        }
      })
      .then((pizza) => setCurrentPizza(pizza[0]));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <Fade in={currentPizza !== defaultPizza}>
      <article className={styles.pizza}>
        <img src={currentPizza.imageUrl} alt='Pizza' width={260} height={260} />
        <h2>{currentPizza.title}</h2>
        <p>{currentPizza.title}</p>
        <h4>{currentPizza.price} ₴</h4>
      </article>
    </Fade>
  );
};

export default FullPizza;
