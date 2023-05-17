import { Fade } from '@mui/material';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

import styles from './CartEmpty.module.css';
import { Link } from 'react-router-dom';
import { FC } from 'react';

const CartEmpty: FC = () => {
  return (
    <Fade in={true}>
      <div className={styles.cart}>
        <h2 className={styles.title}>Корзина пустая 😕</h2>
        <p className={styles.text}>
          Вероятней всего, вы не заказывали ещё пиццу.
          <br />
          Для того, чтобы заказать пиццу, перейди на главную страницу.
        </p>
        <RemoveShoppingCartIcon className={styles.img} fontSize='large' />
        <Link className={styles.link} to={'/'}>
          <p>Вернуться назад</p>
        </Link>
      </div>
    </Fade>
  );
};

export default CartEmpty;
