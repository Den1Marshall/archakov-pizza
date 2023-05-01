import { useEffect, useState } from 'react';
import styles from './FullPizza.module.css';

import { useNavigate, useParams } from 'react-router-dom';
import { Fade } from '@mui/material';

const FullPizza = () => {
  const { id } = useParams();

  const defaultPizza = {
    img: '',
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
      .then((pizza) => setCurrentPizza(...pizza));
  }, [id]);

  return (
    <Fade in={currentPizza !== defaultPizza}>
      <article className={styles.pizza}>
        <img
          className={styles.img}
          src={currentPizza.imageUrl}
          alt='Pizza'
          width={260}
          height={260}
        />
        <h2 className={styles.title}>{currentPizza.title}</h2>
        <p className={styles.text}>{currentPizza.title}</p>
        <h4 className={styles.price}>{currentPizza.price} ₴</h4>
      </article>
    </Fade>
  );
};

export default FullPizza;
